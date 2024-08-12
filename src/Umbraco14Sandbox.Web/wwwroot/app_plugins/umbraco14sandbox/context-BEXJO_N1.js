import { UmbControllerBase as e } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_CONTEXT as r } from "@umbraco-cms/backoffice/workspace";
class n extends e {
  constructor(t) {
    super(t), this.workspaceAlias = "punk.workspace", this.provideContext(r, this), this.provideContext(s, this);
  }
  getEntityType() {
    return "punk-workspace";
  }
  getUnique() {
  }
}
const s = new o(
  n.name
);
export {
  n as PunkWorkspaceContext,
  s as TIME_WORKSPACE_CONTEXT,
  n as default
};
//# sourceMappingURL=context-BEXJO_N1.js.map
