import { LitElement, html, css, customElement, property, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";


@customElement('punk-suggestions')
export default class PunkSuggestionsPropertyEditorUIElement extends LitElement {
    @property({ type: String })
    public value = "";


    #onInput(e: InputEvent) {
        this.value = (e.target as HTMLInputElement).value;
        this.#dispatchChangeEvent();
    }

    #dispatchChangeEvent() {
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }

    @state()
    private _suggestions = [
      'You should take a break',
      'I suggest that you visit the Eiffel Tower',
      'How about starting a book club today or this week?',
      'Are you hungry?',
    ];

    #onSuggestion() {
        const randomIndex = (this._suggestions.length * Math.random()) | 0;
        this.value = this._suggestions[randomIndex];
        this.#dispatchChangeEvent();
      }

    render() {
        return html`
         <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        .value=${this.value || ""}
        @input=${this.#onInput}
      >
      </uui-input>
          <div id="wrapper">
            <uui-button
              id="suggestion-button"
              class="element"
              look="primary"
              label="give me suggestions"
              @click=${this.#onSuggestion}
            >
              Give me suggestions!
            </uui-button>
            <uui-button
              id="suggestion-trimmer"
              class="element"
              look="outline"
              label="Trim text"
            >
              Trim text
            </uui-button>
          </div>
        `;
    }

    static styles = [
        css`
          #wrapper {
            margin-top: 10px;
            display: flex;
            gap: 10px;
          }
          .element {
            width: 100%;
          }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'punk-suggestions': PunkSuggestionsPropertyEditorUIElement;
    }
}