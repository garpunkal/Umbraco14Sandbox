import { UmbElementMixin as l } from "@umbraco-cms/backoffice/element-api";
import { LitElement as m, html as u, css as _, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { PunkWorkspaceContext as d } from "./context-BEXJO_N1.js";
var f = Object.defineProperty, h = Object.getOwnPropertyDescriptor, i = (e) => {
  throw TypeError(e);
}, k = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? h(r, t) : r, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (a = (o ? p(r, t, a) : p(a)) || a);
  return o && a && f(r, t, a), a;
}, w = (e, r, t) => r.has(e) || i("Cannot " + t), x = (e, r, t) => (w(e, r, "read from private field"), t ? t.call(e) : r.get(e)), E = (e, r, t) => r.has(e) ? i("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), c;
let s = class extends l(m) {
  constructor() {
    super(), E(this, c, new d(this)), x(this, c)._host;
  }
  render() {
    return u`
        	<umb-workspace-editor headline="Punk" alias="punk.workspace" .enforceNoFooter=${!0}>
            </umb-workspace-editor>
        `;
  }
};
c = /* @__PURE__ */ new WeakMap();
s.styles = _`
        uui-box {
            display: block;
            margin: 20px;
        }
    `;
s = k([
  v("punk-workspace-root")
], s);
const y = s;
export {
  s as TimeWorkspaceElement,
  y as default
};
//# sourceMappingURL=workspace.element-DdTnOOcJ.js.map
