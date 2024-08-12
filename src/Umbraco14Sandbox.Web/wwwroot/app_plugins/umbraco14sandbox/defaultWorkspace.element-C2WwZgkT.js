import { LitElement as h, html as c, css as v, state as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
var m = Object.defineProperty, y = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, l = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? y(t, r) : t, u = e.length - 1, n; u >= 0; u--)
    (n = e[u]) && (a = (s ? n(t, r, a) : n(a)) || a);
  return s && a && m(t, r, a), a;
}, x = (e, t, r) => t.has(e) || p("Cannot " + r), b = (e, t, r) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r) => (x(e, t, "access private method"), r), i, d;
let o = class extends h {
  constructor() {
    super(...arguments), b(this, i), this.text = "punk text goes here";
  }
  render() {
    return c`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="default view">
                    <umb-property-layout
                        label="property"
                        description="property description">
                        <div slot="editor">
                            <uui-input 
                                slot="editor"
                                type="text"
                                @change=${w(this, i, d)}
                                .value=${this.text}></uui-input>
                        </div>
                    </umb-property-layout>

                    <em>[${this.text}]</em>
                </uui-box>
            </umb-body-layout>

        `;
  }
};
i = /* @__PURE__ */ new WeakSet();
d = function(e) {
  this.text = e.target.value;
};
o.styles = v`
        uui-input {
            width: 100%;
            --uui-button-border-radius: 0;
        }
    `;
l([
  _()
], o.prototype, "text", 2);
o = l([
  f("punk-workspace-default-view")
], o);
const E = o;
export {
  o as PunkDefaultWorkspaceElement,
  E as default
};
//# sourceMappingURL=defaultWorkspace.element-C2WwZgkT.js.map
