import { UMB_CURRENT_USER_CONTEXT as b } from "@umbraco-cms/backoffice/current-user";
import { LitElement as _, html as h, repeat as m, css as v, state as p, property as f, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { UmbUserCollectionRepository as k } from "@umbraco-cms/backoffice/user";
import { UserStateModel as u } from "@umbraco-cms/backoffice/external/backend-api";
var g = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, s = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? w(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (a = (l ? n(t, r, a) : n(a)) || a);
  return l && a && g(t, r, a), a;
}, C = (e, t, r) => t.has(e) || d("Cannot " + r), D = (e, t, r) => (C(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), c;
let o = class extends y(_) {
  constructor() {
    super(), this._userData = [], E(this, c, new k(this)), this.title = "Punk Dashboard", this.getLookAndColorFromUserState = (e) => {
      switch (e) {
        case u.INACTIVE:
        case u.INVITED:
          return { look: "primary", color: "warning" };
        case u.ACTIVE:
          return { look: "primary", color: "positive" };
        case u.DISABLED:
          return { look: "primary", color: "danger" };
        default:
          return { look: "secondary", color: "default" };
      }
    }, this.consumeContext(b, (e) => {
      this._observeCurrentUser(e);
    }), this._getPagedUserData();
  }
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (t) => {
      this._currentUser = t;
    });
  }
  async _getPagedUserData() {
    const { data: e } = await D(this, c).requestCollection();
    this._userData = (e == null ? void 0 : e.items) ?? [];
  }
  render() {
    var e;
    return h`
          <uui-box headline="hello world">


                <h1>Welcome ${((e = this._currentUser) == null ? void 0 : e.name) ?? "Unknown"}!</h1>
         
                <uui-button href="https://garpunkal.dev" look="primary" type="button" target="_blank">garpunkal.dev</uui-button>

                <uui-table id="users-wrapper">
				<uui-table-row>
					<uui-table-head-cell>Name</uui-table-head-cell>
					<uui-table-head-cell>Email</uui-table-head-cell>
					<uui-table-head-cell>Status</uui-table-head-cell>
				</uui-table-row>
				${m(this._userData, (t) => t.unique, (t) => this._renderUser(t))}
			</uui-table>

            </uui-box>
        `;
  }
  _renderUser(e) {
    if (!e) return;
    const t = this.getLookAndColorFromUserState(e.state);
    return h`<uui-table-row class="user">
                <uui-table-cell>${e.name}</uui-table-cell>
                <uui-table-cell>${e.email}</uui-table-cell>
                <uui-table-cell><uui-tag look=${t.look} color=${t.color}>${e.state}</uui-tag></uui-table-cell>
            </uui-table-row>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
o.styles = [
  v`
       :host {
			display: block;
			padding: var(--uui-size-layout-1);
		}

		uui-table-head-cell {
			font-weight: bold;
		}

		.user:hover,
		.user:focus {
			cursor: pointer;
			background-color: var(--uui-color-surface-alt);
		}
    `
];
s([
  p()
], o.prototype, "_currentUser", 2);
s([
  p()
], o.prototype, "_userData", 2);
s([
  f()
], o.prototype, "title", 2);
o = s([
  U("punk-dashboard")
], o);
const A = o;
export {
  o as PunkDashboard,
  A as default
};
//# sourceMappingURL=dashboard.element-BY7oNU5Z.js.map
