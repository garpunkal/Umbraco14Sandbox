import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/extension-registry';
import { css, customElement, html, ifDefined, LitElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationDefaultData } from "@umbraco-cms/backoffice/notification";
import { type UmbPropertyEditorConfigCollection, UmbPropertyValueChangeEvent } from '@umbraco-cms/backoffice/property-editor';
import { UMB_MODAL_MANAGER_CONTEXT, UMB_CONFIRM_MODAL,} from "@umbraco-cms/backoffice/modal";

@customElement('punk-suggestions')
export default class PunkSuggestionsPropertyEditorUIElement extends UmbElementMixin((LitElement)) implements UmbPropertyEditorUiElement {

    _modalManagerContext?: typeof UMB_MODAL_MANAGER_CONTEXT.TYPE;
    _notificationContext?: typeof UMB_NOTIFICATION_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
            this._modalManagerContext = instance;
        });

        this.consumeContext(UMB_NOTIFICATION_CONTEXT, (instance) => {
            this._notificationContext = instance;
        });
    }

    @state()
    private _disabled?: boolean;

    @state()
    private _placeholder?: string;

    @state()
    private _maxChars?: number;

    @state()
    private _suggestions?: Array<string> = [];

    @property({ type: String })
    public value = "";

    @property({ attribute: false })
    public set config(config: UmbPropertyEditorConfigCollection) {
        this._disabled = config.getValueByAlias("disabled");
        this._placeholder = config.getValueByAlias("placeholder");
        this._maxChars = config.getValueByAlias("maxChars");
        this._suggestions = config.getValueByAlias<string>("suggestions")?.split('\n') || [];
    }

    #onInput(e: InputEvent) {
        this.value = (e.target as HTMLInputElement).value;
        this.#dispatchChangeEvent();
    }

    #dispatchChangeEvent() {
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }

    #onSuggestion() {
        const randomIndex = (this._suggestions!.length * Math.random()) | 0;
        this.value = this._suggestions![randomIndex];
        this.#dispatchChangeEvent();
    }

    #onTextTrim() {
        if (!this._maxChars) return;
        if (!this.value || (this.value as string).length <= this._maxChars) {
            const data: UmbNotificationDefaultData = {
                message: `Nothing to trim!`,
            };
            this._notificationContext?.peek("danger", { data });
            return;
        }

        const trimmed = (this.value as string).substring(0, this._maxChars);
        const modalHandler = this._modalManagerContext?.open(this, UMB_CONFIRM_MODAL,
            {
                data: {
                    headline: `Trim text`,
                    content: `Do you want to trim the text to "${trimmed}"?`,
                    color: "danger",
                    confirmLabel: "Trim",
                }
            }
        );
        modalHandler?.onSubmit().then(() => {
            this.value = trimmed;
            this.#dispatchChangeEvent();
            const data: UmbNotificationDefaultData = {
                headline: `Text trimmed`,
                message: `You trimmed the text!`,
            };
            this._notificationContext?.peek("positive", { data });
        }, null);

    }

    render() {
        return html`
         <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        placeholder=${ifDefined(this._placeholder)}
        maxlength=${ifDefined(this._maxChars)}
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
          ?disabled=${this._disabled}
          @click=${this.#onSuggestion}
        >
          Give me suggestions!
        </uui-button>
        <uui-button
                id="suggestion-trimmer"
                class="element"
                look="outline"
                label="Trim text"
                @click=${this.#onTextTrim}
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