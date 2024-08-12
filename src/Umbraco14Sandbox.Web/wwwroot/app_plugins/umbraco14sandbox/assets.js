import { UMB_CURRENT_USER_CONTEXT as te } from "@umbraco-cms/backoffice/current-user";
import { LitElement as g, html as l, repeat as oe, css as C, state as i, property as D, customElement as m, ifDefined as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as x } from "@umbraco-cms/backoffice/element-api";
import { UmbUserCollectionRepository as ae } from "@umbraco-cms/backoffice/user";
import { UserStateModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { UMB_NOTIFICATION_CONTEXT as ne } from "@umbraco-cms/backoffice/notification";
import { UmbPropertyValueChangeEvent as se } from "@umbraco-cms/backoffice/property-editor";
import { UMB_MODAL_MANAGER_CONTEXT as j, UMB_CONFIRM_MODAL as B, UmbModalToken as re, UMB_ICON_PICKER_MODAL as I, UMB_CODE_EDITOR_MODAL as ie, UmbModalBaseElement as le } from "@umbraco-cms/backoffice/modal";
import { UmbControllerBase as ue } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as ce } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_CONTEXT as pe } from "@umbraco-cms/backoffice/workspace";
import { UMB_PROPERTY_DATASET_CONTEXT as de } from "@umbraco-cms/backoffice/property";
import { UMB_BLOCK_CATALOGUE_MODAL as me } from "@umbraco-cms/backoffice/block";
import { extractUmbColorVariable as he } from "@umbraco-cms/backoffice/resources";
const _e = [
  {
    type: "dashboard",
    name: "Punk.Dashboard",
    alias: "punk.dashboard",
    elementName: "punk-dashboard",
    js: () => Promise.resolve().then(() => Ne),
    weight: -10,
    meta: {
      label: "Punk Dashboard",
      pathname: "punk-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "punk.section"
      }
    ]
  }
], be = [..._e], ge = [
  {
    type: "propertyEditorUi",
    name: "Punk.Suggestions",
    alias: "punk.suggestions",
    elementName: "punk-suggestions",
    js: () => Promise.resolve().then(() => Xe),
    meta: {
      label: "Suggestions",
      icon: "icon-list",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: [
          {
            alias: "disabled",
            label: "Disabled",
            description: "Disables the suggestion button",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "placeholder",
            label: "Placeholder text",
            description: "A nice placeholder description to help out our editor!",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "maxChars",
            label: "Max characters allowed",
            description: "The maximum number of allowed characters in a suggestion",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          },
          {
            alias: "suggestions",
            label: "Suggestions",
            description: "A list of suggestions to suggest",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextArea"
          }
        ],
        defaultData: [
          {
            alias: "disabled",
            value: !0
          },
          {
            alias: "placeholder",
            value: "Write a suggestion"
          },
          {
            alias: "maxChars",
            value: 50
          }
        ]
      }
    }
  }
], ve = [...ge], fe = {
  type: "section",
  alias: "punk.section",
  name: "Punk section",
  weight: 10,
  meta: {
    label: "Punk",
    pathname: "Punk"
  }
}, ye = [fe], ke = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: "punk.sidebar.app",
  name: "Punk app",
  meta: {
    label: "Punk",
    menu: "punk.menu"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "punk.section"
    }
  ]
}, Ce = {
  type: "menu",
  alias: "punk.menu",
  name: "punk sidebar menu",
  meta: {
    label: "Punk"
  }
}, xe = {
  type: "menuItem",
  alias: "punk.menu.item",
  name: "punk menu item",
  meta: {
    label: "Punks",
    icon: "icon-umbraco",
    entityType: "punk-workspace",
    menus: [
      "punk.menu"
    ]
  }
}, we = [
  ke,
  Ce,
  xe
];
var P = {
  type: "workspace",
  alias: "punk.workspace",
  name: "punk workspace",
  js: () => Promise.resolve().then(() => Ze),
  meta: {
    entityType: "punk-workspace"
  }
}, Pe = [
  {
    type: "workspaceView",
    alias: "punk.workspace.default",
    name: "default view",
    js: () => Promise.resolve().then(() => rt),
    weight: 300,
    meta: {
      icon: "icon-alarm-clock",
      pathname: "overview",
      label: "punk"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: P.alias
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "punk.workspace.settings",
    name: "setting view",
    js: () => Promise.resolve().then(() => ct),
    weight: 200,
    meta: {
      icon: "icon-settings",
      pathname: "settings",
      label: "settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: P.alias
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "punk.workspace.dialogs",
    name: "dialogs",
    js: () => Promise.resolve().then(() => _t),
    weight: 50,
    meta: {
      icon: "icon-app",
      pathname: "dialogs",
      label: "Dialogs"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: P.alias
      }
    ]
  }
];
const $e = {
  type: "workspaceContext",
  alias: "punk.workspace.context",
  name: "punk workspace context",
  js: () => Promise.resolve().then(() => Fe)
}, Ee = [], Oe = [], Te = [
  $e,
  P,
  ...Pe,
  ...Ee,
  ...Oe
], Ue = [
  {
    type: "modal",
    alias: "punk.custom.modal",
    name: "punk custom modal",
    js: () => Promise.resolve().then(() => kt)
  }
], Se = [...Ue], Me = [
  ...be,
  ...ve,
  ...ye,
  ...we,
  ...Te,
  ...Se
], It = (e, t) => {
  t.registerMany(Me);
};
var De = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, E = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? Ae(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && De(t, o, a), a;
}, We = (e, t, o) => t.has(e) || N("Cannot " + o), Ie = (e, t, o) => (We(e, t, "read from private field"), o ? o.call(e) : t.get(e)), je = (e, t, o) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), U;
let p = class extends x(g) {
  constructor() {
    super(), this._userData = [], je(this, U, new ae(this)), this.title = "Punk Dashboard", this.getLookAndColorFromUserState = (e) => {
      switch (e) {
        case w.INACTIVE:
        case w.INVITED:
          return { look: "primary", color: "warning" };
        case w.ACTIVE:
          return { look: "primary", color: "positive" };
        case w.DISABLED:
          return { look: "primary", color: "danger" };
        default:
          return { look: "secondary", color: "default" };
      }
    }, this.consumeContext(te, (e) => {
      this._observeCurrentUser(e);
    }), this._getPagedUserData();
  }
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (t) => {
      this._currentUser = t;
    });
  }
  async _getPagedUserData() {
    const { data: e } = await Ie(this, U).requestCollection();
    this._userData = (e == null ? void 0 : e.items) ?? [];
  }
  render() {
    var e;
    return l`
          <uui-box headline="hello world">
            
                <h1>Welcome ${((e = this._currentUser) == null ? void 0 : e.name) ?? "Unknown"}!</h1>
         
                <uui-button href="https://garpunkal.dev" look="primary" type="button" target="_blank">garpunkal.dev</uui-button>

                <uui-table id="users-wrapper">
				<uui-table-row>
					<uui-table-head-cell>Name</uui-table-head-cell>
					<uui-table-head-cell>Email</uui-table-head-cell>
					<uui-table-head-cell>Status</uui-table-head-cell>
				</uui-table-row>
				${oe(this._userData, (t) => t.unique, (t) => this._renderUser(t))}
			</uui-table>

            </uui-box>
        `;
  }
  _renderUser(e) {
    if (!e) return;
    const t = this.getLookAndColorFromUserState(e.state);
    return l`<uui-table-row class="user">
                <uui-table-cell>${e.name}</uui-table-cell>
                <uui-table-cell>${e.email}</uui-table-cell>
                <uui-table-cell><uui-tag look=${t.look} color=${t.color}>${e.state}</uui-tag></uui-table-cell>
            </uui-table-row>`;
  }
};
U = /* @__PURE__ */ new WeakMap();
p.styles = [
  C`
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
E([
  i()
], p.prototype, "_currentUser", 2);
E([
  i()
], p.prototype, "_userData", 2);
E([
  D()
], p.prototype, "title", 2);
p = E([
  m("punk-dashboard")
], p);
const Be = p, Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PunkDashboard() {
    return p;
  },
  default: Be
}, Symbol.toStringTag, { value: "Module" }));
var Ve = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, h = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? Le(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && Ve(t, o, a), a;
}, Re = (e, t, o) => t.has(e) || V("Cannot " + o), ze = (e, t, o) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), _ = (e, t, o) => (Re(e, t, "access private method"), o), c, L, O, R, z;
let u = class extends x(g) {
  constructor() {
    super(), ze(this, c), this._suggestions = [], this.value = "", this.consumeContext(j, (e) => {
      this._modalManagerContext = e;
    }), this.consumeContext(ne, (e) => {
      this._notificationContext = e;
    });
  }
  set config(e) {
    var t;
    this._disabled = e.getValueByAlias("disabled"), this._placeholder = e.getValueByAlias("placeholder"), this._maxChars = e.getValueByAlias("maxChars"), this._suggestions = ((t = e.getValueByAlias("suggestions")) == null ? void 0 : t.split(`
`)) || [];
  }
  render() {
    return l`
         <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        placeholder=${W(this._placeholder)}
        maxlength=${W(this._maxChars)}
        .value=${this.value || ""}
        @input=${_(this, c, L)}
      >
      </uui-input>
      <div id="wrapper">
        <uui-button
          id="suggestion-button"
          class="element"
          look="primary"
          label="give me suggestions"
          ?disabled=${this._disabled}
          @click=${_(this, c, R)}
        >
          Give me suggestions!
        </uui-button>
        <uui-button
                id="suggestion-trimmer"
                class="element"
                look="outline"
                label="Trim text"
                @click=${_(this, c, z)}
                >
                Trim text
                </uui-button>
      </div>
        `;
  }
};
c = /* @__PURE__ */ new WeakSet();
L = function(e) {
  this.value = e.target.value, _(this, c, O).call(this);
};
O = function() {
  this.dispatchEvent(new se());
};
R = function() {
  const e = this._suggestions.length * Math.random() | 0;
  this.value = this._suggestions[e], _(this, c, O).call(this);
};
z = function() {
  var o, n;
  if (!this._maxChars) return;
  if (!this.value || this.value.length <= this._maxChars) {
    const a = {
      message: "Nothing to trim!"
    };
    (o = this._notificationContext) == null || o.peek("danger", { data: a });
    return;
  }
  const e = this.value.substring(0, this._maxChars), t = (n = this._modalManagerContext) == null ? void 0 : n.open(
    this,
    B,
    {
      data: {
        headline: "Trim text",
        content: `Do you want to trim the text to "${e}"?`,
        color: "danger",
        confirmLabel: "Trim"
      }
    }
  );
  t == null || t.onSubmit().then(() => {
    var s;
    this.value = e, _(this, c, O).call(this);
    const a = {
      headline: "Text trimmed",
      message: "You trimmed the text!"
    };
    (s = this._notificationContext) == null || s.peek("positive", { data: a });
  }, null);
};
u.styles = [
  C`
          #wrapper {
            margin-top: 10px;
            display: flex;
            gap: 10px;
          }
          .element {
            width: 100%;
          }
        `
];
h([
  i()
], u.prototype, "_disabled", 2);
h([
  i()
], u.prototype, "_placeholder", 2);
h([
  i()
], u.prototype, "_maxChars", 2);
h([
  i()
], u.prototype, "_suggestions", 2);
h([
  D({ type: String })
], u.prototype, "value", 2);
h([
  D({ attribute: !1 })
], u.prototype, "config", 1);
u = h([
  m("punk-suggestions")
], u);
const Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return u;
  }
}, Symbol.toStringTag, { value: "Module" }));
class $ extends ue {
  constructor(t) {
    super(t), this.workspaceAlias = "punk.workspace", this.provideContext(pe, this), this.provideContext(X, this);
  }
  getEntityType() {
    return "punk-workspace";
  }
  getUnique() {
  }
}
const X = new ce(
  $.name
), Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PunkWorkspaceContext: $,
  TIME_WORKSPACE_CONTEXT: X,
  default: $
}, Symbol.toStringTag, { value: "Module" }));
var Ge = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, F = (e) => {
  throw TypeError(e);
}, qe = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? Ke(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && Ge(t, o, a), a;
}, Ye = (e, t, o) => t.has(e) || F("Cannot " + o), He = (e, t, o) => (Ye(e, t, "read from private field"), o ? o.call(e) : t.get(e)), Je = (e, t, o) => t.has(e) ? F("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), S;
let f = class extends x(g) {
  constructor() {
    super(), Je(this, S, new $(this)), He(this, S)._host;
  }
  render() {
    return l`
        	<umb-workspace-editor headline="Punk" alias="punk.workspace" .enforceNoFooter=${!0}>
            </umb-workspace-editor>
        `;
  }
};
S = /* @__PURE__ */ new WeakMap();
f.styles = C`
        uui-box {
            display: block;
            margin: 20px;
        }
    `;
f = qe([
  m("punk-workspace-root")
], f);
const Qe = f, Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TimeWorkspaceElement() {
    return f;
  },
  default: Qe
}, Symbol.toStringTag, { value: "Module" }));
var et = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, K = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? tt(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && et(t, o, a), a;
}, ot = (e, t, o) => t.has(e) || G("Cannot " + o), at = (e, t, o) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), nt = (e, t, o) => (ot(e, t, "access private method"), o), M, q;
let b = class extends g {
  constructor() {
    super(...arguments), at(this, M), this.text = "punk text goes here";
  }
  render() {
    return l`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="default view">
                    <umb-property-layout
                        label="property"
                        description="property description">
                        <div slot="editor">
                            <uui-input 
                                slot="editor"
                                type="text"
                                @change=${nt(this, M, q)}
                                .value=${this.text}></uui-input>
                        </div>
                    </umb-property-layout>

                    <em>[${this.text}]</em>
                </uui-box>
            </umb-body-layout>

        `;
  }
};
M = /* @__PURE__ */ new WeakSet();
q = function(e) {
  this.text = e.target.value;
};
b.styles = C`
        uui-input {
            width: 100%;
            --uui-button-border-radius: 0;
        }
    `;
K([
  i()
], b.prototype, "text", 2);
b = K([
  m("punk-workspace-default-view")
], b);
const st = b, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PunkDefaultWorkspaceElement() {
    return b;
  },
  default: st
}, Symbol.toStringTag, { value: "Module" }));
var it = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, Y = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? lt(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && it(t, o, a), a;
};
let y = class extends x(g) {
  constructor() {
    super(), this.setting = "Hello", this.consumeContext(de, async (e) => {
      this.observe(
        await e.propertyValueByAlias("textProperty"),
        (t) => {
          console.log(t);
        },
        "observetextProperty"
      );
    });
  }
  render() {
    return l`
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
Y([
  i()
], y.prototype, "setting", 2);
y = Y([
  m("punk-workspace-settings-view")
], y);
const ut = y, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PunkSettingsWorkspaceElement() {
    return y;
  },
  default: ut
}, Symbol.toStringTag, { value: "Module" })), pt = new re(
  "punk.custom.modal",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var dt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, A = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? mt(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && dt(t, o, a), a;
};
let d = class extends x(g) {
  constructor() {
    super(), this.icon = "", this.color = "", this.modal_names = [
      { name: "Icon Picker", value: I },
      // {name: 'Data Type Picker', value: UMB_DATA_TYPE_PICKER_MODAL },
      { name: "Block catalog", value: me },
      // {name: 'Workspace', value: UMB_WORKSPACE_MODAL},
      // {name: 'Document Type picker', value: UMB_DOCUMENT_TYPE_PICKER_MODAL},
      { name: "Code editor", value: ie }
      // {name: 'template picker', value: UMB_TEMPLATE_PICKER_MODAL},
      // {name: 'dictionary item picker', value: UMB_DICTIONARY_ITEM_PICKER_MODAL },
      // {name: 'Partial view picker', value: UMB_PARTIAL_VIEW_PICKER_MODAL},
      // {name: 'Media tree picker', value: UMB_ITEM_PICKER_MODAL}
    ], this.consumeContext(j, (e) => {
      this._modalContext = e;
    });
  }
  async _OpenCustomModal() {
    var o;
    const e = (o = this._modalContext) == null ? void 0 : o.open(this, pt, {
      data: {
        headline: "A Custom modal",
        content: "Some content for the custom modal"
      }
    }), t = await (e == null ? void 0 : e.onSubmit());
    t && console.log("data", t);
  }
  async _OpenIconPicker() {
    var n;
    const e = I, t = (n = this._modalContext) == null ? void 0 : n.open(this, e), o = await (t == null ? void 0 : t.onSubmit());
    o && (console.log(o), o.color && (this.color = o.color), this.icon = o.icon);
  }
  render() {
    return l`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="Dialog Examples">
                    <div class="picker">
                        <div>
                            <uui-icon name="${this.icon}" style="color:var(${he(this.color)})"></uui-icon>
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
    var t;
    const e = (t = this._modalContext) == null ? void 0 : t.open(this, B, {
      data: {
        headline: "Are you sure",
        content: "Do you really want to do the thing here?",
        confirmLabel: "Confim",
        color: "danger"
      }
    });
    e == null || e.onSubmit().then(() => {
      console.log("confirm");
    }).catch(() => {
      console.log("cancel");
    });
  }
  async openModal(e) {
    var n;
    const t = (n = this._modalContext) == null ? void 0 : n.open(this, e), o = await (t == null ? void 0 : t.onSubmit());
    console.log(o);
  }
  render_modals() {
    const e = this.modal_names.map((t) => l`
                <uui-button .label=${t.name}
                color="default" look="secondary"
                @click=${() => this.openModal(t.value)}></uui-button>
            `);
    return l`
            <div class="buttons">
                ${e}
            </div>
        `;
  }
};
d.styles = C`

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
A([
  i()
], d.prototype, "icon", 2);
A([
  i()
], d.prototype, "color", 2);
d = A([
  m("dialog-examples-view")
], d);
const ht = d, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PunkDialogExamplesElement() {
    return d;
  },
  default: ht
}, Symbol.toStringTag, { value: "Module" }));
var bt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, H = (e) => {
  throw TypeError(e);
}, J = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? gt(t, o) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && bt(t, o, a), a;
}, vt = (e, t, o) => t.has(e) || H("Cannot " + o), ft = (e, t, o) => t.has(e) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), T = (e, t, o) => (vt(e, t, "access private method"), o), v, Q, Z, ee;
let k = class extends le {
  constructor() {
    super(), ft(this, v), this.content = "";
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), this.updateValue({ content: (e = this.data) == null ? void 0 : e.content });
  }
  render() {
    var e, t, o;
    return l`
            <umb-body-layout .headline=${((e = this.data) == null ? void 0 : e.headline) ?? "Custom dialog"}>
                <uui-box>
                    <uui-textarea label="content" 
                        rows=10
                        .value=${(t = this.data) == null ? void 0 : t.content}
                        @input=${T(this, v, ee)}>
                    </uui-textarea>
                </uui-box>
                <uui-box>
                    <h2>Return Value</h2>
                    <pre>${(o = this.value) == null ? void 0 : o.content}</pre>
                </uui-box>

                <div slot="actions">
                        <uui-button id="cancel" label="Cancel" @click="${T(this, v, Z)}">Cancel</uui-button>
                        <uui-button
                            id="submit"
                            color='positive'
                            look="primary"
                            label="Submit"
                            @click=${T(this, v, Q)}></uui-button>
            </div>
            </umb-body-layout>
        `;
  }
};
v = /* @__PURE__ */ new WeakSet();
Q = function() {
  var e, t;
  this.value = { content: ((e = this.data) == null ? void 0 : e.content) ?? "" }, (t = this.modalContext) == null || t.submit();
};
Z = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
ee = function(e) {
  this.updateValue({ content: e.target.value.toString() });
};
J([
  i()
], k.prototype, "content", 2);
k = J([
  m("punk-custom-modal")
], k);
const yt = k, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PunkCustomModalElement() {
    return k;
  },
  default: yt
}, Symbol.toStringTag, { value: "Module" }));
export {
  It as onInit
};
//# sourceMappingURL=assets.js.map
