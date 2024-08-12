const n = [
  {
    type: "dashboard",
    name: "Punk.Dashboard",
    alias: "punk.dashboard",
    elementName: "punk-dashboard",
    js: () => import("./dashboard.element-BNBeg4IJ.js"),
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
], i = [...n], s = [
  {
    type: "propertyEditorUi",
    name: "Punk.Suggestions",
    alias: "punk.suggestions",
    elementName: "punk-suggestions",
    js: () => import("./suggestions.element-DL2AlJxx.js"),
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
], o = [...s], p = {
  type: "section",
  alias: "punk.section",
  name: "Punk section",
  weight: 10,
  meta: {
    label: "Punk",
    pathname: "Punk"
  }
}, l = [p], m = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: "punk.sidebar.app",
  name: "punk app",
  meta: {
    label: "Punk",
    menu: "punk.nested.menu"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "punk.section"
    }
  ]
}, c = {
  type: "menu",
  alias: "punk.menu",
  name: "punk sidebar menu",
  meta: {
    label: "punk"
  }
}, r = {
  type: "menuItem",
  alias: "punk.menu.item",
  name: "punk menu item",
  meta: {
    label: "Punk items",
    icon: "icon-alarm-clock",
    entityType: "punk-workspace",
    menus: [
      "punk.menu"
    ]
  },
  element: () => import("./nested-menu.element-rbQGmHuG.js")
}, a = {
  type: "menu",
  alias: "punk.nested.menu",
  name: "Nested menu",
  element: () => import("./nested-menu.element-rbQGmHuG.js"),
  meta: {
    label: "Punk items",
    icon: "icon-alarm-clock",
    entityType: "punk-workspace"
  }
}, u = [
  {
    type: "punk-menu-item",
    alias: "punk.nested.menu.child-one",
    name: "child item",
    weight: 200,
    meta: {
      menus: [a.alias],
      icon: "icon-alarm-clock",
      label: "child item 1",
      entityType: "punk-workspace"
    }
  },
  {
    type: "punk-menu-item",
    alias: "punk.nested.menu.child-two",
    name: "child item two",
    weight: 200,
    meta: {
      menus: [a.alias],
      icon: "icon-alarm-clock",
      label: "child item 2",
      entityType: "punk-workspace"
    }
  }
], d = [
  m,
  c,
  r,
  a,
  ...u
];
var e = {
  type: "workspace",
  alias: "punk.workspace",
  name: "punk workspace",
  js: () => import("./workspace.element-DdTnOOcJ.js"),
  meta: {
    entityType: "punk-workspace"
  }
}, k = [
  {
    type: "workspaceView",
    alias: "punk.workspace.default",
    name: "default view",
    js: () => import("./defaultWorkspace.element-C2WwZgkT.js"),
    weight: 300,
    meta: {
      icon: "icon-alarm-clock",
      pathname: "overview",
      label: "punk"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: e.alias
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "punk.workspace.settings",
    name: "setting view",
    js: () => import("./settingsWorkspace.element-CJF16pYC.js"),
    weight: 200,
    meta: {
      icon: "icon-settings",
      pathname: "settings",
      label: "settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: e.alias
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "punk.workspace.dialogs",
    name: "dialogs",
    js: () => import("./dialogsWorkspace.element-cwSMeUUC.js"),
    weight: 50,
    meta: {
      icon: "icon-app",
      pathname: "dialogs",
      label: "Dialogs"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: e.alias
      }
    ]
  }
];
const g = {
  type: "workspaceContext",
  alias: "punk.workspace.context",
  name: "punk workspace context",
  js: () => import("./context-BEXJO_N1.js")
}, h = [], b = [], w = [
  g,
  e,
  ...k,
  ...h,
  ...b
], y = [
  {
    type: "modal",
    alias: "punk.custom.modal",
    name: "punk custom modal",
    js: () => import("./custom-modal-element-DEV_xMHD.js")
  }
], U = [...y], f = [
  ...i,
  ...o,
  ...l,
  ...d,
  ...w,
  ...U
], P = (A, t) => {
  t.registerMany(f);
};
export {
  P as onInit
};
//# sourceMappingURL=assets.js.map
