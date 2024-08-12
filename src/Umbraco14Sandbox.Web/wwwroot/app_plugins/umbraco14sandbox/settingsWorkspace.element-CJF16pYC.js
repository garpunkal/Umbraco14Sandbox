import { UmbElementMixin as l } from "@umbraco-cms/backoffice/element-api";
import { LitElement as u, html as m, state as c, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UMB_PROPERTY_DATASET_CONTEXT as y } from "@umbraco-cms/backoffice/property";
var h = Object.defineProperty, g = Object.getOwnPropertyDescriptor, a = (r, t, i, o) => {
  for (var e = o > 1 ? void 0 : o ? g(t, i) : t, n = r.length - 1, p; n >= 0; n--)
    (p = r[n]) && (e = (o ? p(t, i, e) : p(e)) || e);
  return o && e && h(t, i, e), e;
};
let s = class extends l(u) {
  constructor() {
    super(), this.setting = "Hello", this.consumeContext(y, async (r) => {
      this.observe(
        await r.propertyValueByAlias("textProperty"),
        (t) => {
          console.log(t);
        },
        "observetextProperty"
      );
    });
  }
  render() {
    return m`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="settings view">

                    Something...

                    <umb-property
                        label="Icon picker"
                        description="pick an icon"
                        alias="setting"
                        property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"></umb-property>

                        <pre>${this.setting}</pre>
                </uui-box>
            </umb-body-layout>
        `;
  }
};
a([
  c()
], s.prototype, "setting", 2);
s = a([
  b("punk-workspace-settings-view")
], s);
const x = s;
export {
  s as PunkSettingsWorkspaceElement,
  x as default
};
//# sourceMappingURL=settingsWorkspace.element-CJF16pYC.js.map
