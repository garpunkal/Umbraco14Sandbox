import { UMB_BLOCK_CATALOGUE_MODAL as d } from "@umbraco-cms/backoffice/block";
import { UmbElementMixin as p } from "@umbraco-cms/backoffice/element-api";
import { LitElement as h, html as r, css as _, state as m, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as f, UMB_ICON_PICKER_MODAL as c, UMB_WORKSPACE_MODAL as M, UMB_CODE_EDITOR_MODAL as v, UMB_ITEM_PICKER_MODAL as O, UMB_MODAL_MANAGER_CONTEXT as y, UMB_CONFIRM_MODAL as C } from "@umbraco-cms/backoffice/modal";
import { extractUmbColorVariable as x } from "@umbraco-cms/backoffice/resources";
const E = new f(
  "punk.custom.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var g = Object.defineProperty, D = Object.getOwnPropertyDescriptor, u = (t, o, e, n) => {
  for (var i = n > 1 ? void 0 : n ? D(o, e) : o, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (i = (n ? s(o, e, i) : s(i)) || i);
  return n && i && g(o, e, i), i;
};
let a = class extends p(h) {
  constructor() {
    super(), this.icon = "", this.color = "", this.modal_names = [
      { name: "Icon Picker", value: c },
      // {name: 'Data Type Picker', value: UMB_DATA_TYPE_PICKER_MODAL },
      { name: "Block cataloug", value: d },
      { name: "Workspace", value: M },
      // {name: 'Document Type picker', value: UMB_DOCUMENT_TYPE_PICKER_MODAL},
      { name: "Code editor", value: v },
      // {name: 'template picker', value: UMB_TEMPLATE_PICKER_MODAL},
      // {name: 'dictionary item picker', value: UMB_DICTIONARY_ITEM_PICKER_MODAL },
      // {name: 'Partial view picker', value: UMB_PARTIAL_VIEW_PICKER_MODAL},
      { name: "Media tree picker", value: O }
    ], this.consumeContext(y, (t) => {
      this._modalContext = t;
    });
  }
  async _OpenCustomModal() {
    var e;
    const t = (e = this._modalContext) == null ? void 0 : e.open(this, E, {
      data: {
        headline: "A Custom modal",
        content: "Some content for the custom modal"
      }
    }), o = await (t == null ? void 0 : t.onSubmit());
    o && console.log("data", o);
  }
  async _OpenIconPicker() {
    var n;
    const t = c, o = (n = this._modalContext) == null ? void 0 : n.open(this, t), e = await (o == null ? void 0 : o.onSubmit());
    e && (console.log(e), e.color && (this.color = e.color), this.icon = e.icon);
  }
  render() {
    return r`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="Dialog Examples">
                    <div class="picker">
                        <div>
                            <uui-icon name="${this.icon}" style="color:var(${x(this.color)})"></uui-icon>
                            <pre>${this.icon} ${this.color}</pre>
                        </div>
                        <div>
                            <uui-button look="primary"
                                        color="default"
                                        label="Pick an icon"
                                        @click=${this._OpenIconPicker}></uui-button>
                        </div>
                    </div>

                    <div>
                        <uui-button look="secondary"
                                    color="positive"
                                    label="custom dialog"
                                    @click=${this._OpenCustomModal}></uui-button>
                    </div>
                </uui-box>

                

                <uui-box>
                    ${this.render_modals()}
                </uui-box>

                <uui-box>
                    <uui-button 
                        color="danger" 
                        look="primary"
                        label="Confirm?" @click=${this.openConfirm}></uui-button>
                </uui-box>
            </umb-body-layout>        
        `;
  }
  async openConfirm() {
    var o;
    const t = (o = this._modalContext) == null ? void 0 : o.open(this, C, {
      data: {
        headline: "Are you sure",
        content: "Do you really want to do the thing here?",
        confirmLabel: "Confim",
        color: "danger"
      }
    });
    t == null || t.onSubmit().then(() => {
      console.log("confirm");
    }).catch(() => {
      console.log("cancel");
    });
  }
  async openModal(t) {
    var n;
    const o = (n = this._modalContext) == null ? void 0 : n.open(this, t), e = await (o == null ? void 0 : o.onSubmit());
    console.log(e);
  }
  render_modals() {
    const t = this.modal_names.map((o) => r`
                <uui-button .label=${o.name}
                color="default" look="secondary"
                @click=${() => this.openModal(o.value)}></uui-button>
            `);
    return r`
            <div class="buttons">
                ${t}
            </div>
        `;
  }
};
a.styles = _`

        uui-icon {
            font-size: 25pt;
        }

        .picker {
            display: flex;
        }
        .buttons {
            display: flex;
            flex-wrap: wrap;
        }

        .buttons > uui-button {
            margin: 10px ;
        }

    `;
u([
  m()
], a.prototype, "icon", 2);
u([
  m()
], a.prototype, "color", 2);
a = u([
  b("dialog-examples-view")
], a);
const $ = a;
export {
  a as PunkDialogExamplesElement,
  $ as default
};
//# sourceMappingURL=dialogsWorkspace.element-cwSMeUUC.js.map
