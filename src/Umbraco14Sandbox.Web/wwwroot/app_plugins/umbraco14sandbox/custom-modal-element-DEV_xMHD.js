import { html as v, state as b, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
var f = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, d = (t, e, n, u) => {
  for (var a = u > 1 ? void 0 : u ? x(e, n) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (a = (u ? s(e, n, a) : s(a)) || a);
  return u && a && f(e, n, a), a;
}, y = (t, e, n) => e.has(t) || c("Cannot " + n), k = (t, e, n) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), r = (t, e, n) => (y(t, e, "access private method"), n), o, h, m, p;
let i = class extends C {
  constructor() {
    super(), k(this, o), this.content = "";
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this.updateValue({ content: (t = this.data) == null ? void 0 : t.content });
  }
  render() {
    var t, e, n;
    return v`
            <umb-body-layout .headline=${((t = this.data) == null ? void 0 : t.headline) ?? "Custom dialog"}>
                <uui-box>
                    <uui-textarea label="content" 
                        rows=10
                        .value=${(e = this.data) == null ? void 0 : e.content}
                        @input=${r(this, o, p)}>
                    </uui-textarea>
                </uui-box>
                <uui-box>
                    <h2>Return Value</h2>
                    <pre>${(n = this.value) == null ? void 0 : n.content}</pre>
                </uui-box>

                <div slot="actions">
                        <uui-button id="cancel" label="Cancel" @click="${r(this, o, m)}">Cancel</uui-button>
                        <uui-button
                            id="submit"
                            color='positive'
                            look="primary"
                            label="Submit"
                            @click=${r(this, o, h)}></uui-button>
            </div>
            </umb-body-layout>
        `;
  }
};
o = /* @__PURE__ */ new WeakSet();
h = function() {
  var t, e;
  this.value = { content: ((t = this.data) == null ? void 0 : t.content) ?? "" }, (e = this.modalContext) == null || e.submit();
};
m = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
p = function(t) {
  this.updateValue({ content: t.target.value.toString() });
};
d([
  b()
], i.prototype, "content", 2);
i = d([
  _("punk-custom-modal")
], i);
const $ = i;
export {
  i as PunkCustomModalElement,
  $ as default
};
//# sourceMappingURL=custom-modal-element-DEV_xMHD.js.map
