import { UmbElementMixin as o } from "@umbraco-cms/backoffice/element-api";
import { LitElement as p, html as u, ifDefined as a, property as d, customElement as b } from "@umbraco-cms/backoffice/external/lit";
var h = Object.defineProperty, y = Object.getOwnPropertyDescriptor, f = (t, n, s, m) => {
  for (var e = m > 1 ? void 0 : m ? y(n, s) : n, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (e = (m ? l(n, s, e) : l(e)) || e);
  return m && e && h(n, s, e), e;
};
let i = class extends o(p) {
  render() {
    return u`
            <umb-menu-item-layout
                label=${this.manifest.meta.label || this.manifest.name}
                icon-name=${a(this.manifest.meta.icon)}
                entity-type=${a(this.manifest.meta.entityType)}
                has-Children=${!0}>${this.renderChildren()}</umb-menu-item-layout>`;
  }
  renderChildren() {
    return u` <umb-extension-slot
			type="punk-menu-item"
			.filter=${(t) => t.meta.menus.includes(this.manifest.alias)}
    		default-element="umb-menu-item-default"></umb-extension-slot>`;
  }
};
f([
  d({ type: Object, attribute: !1 })
], i.prototype, "manifest", 2);
i = f([
  b("punk-nested-menu-item")
], i);
const v = i;
export {
  i as NestedMenuItemElement,
  v as default
};
//# sourceMappingURL=nested-menu.element-rbQGmHuG.js.map
