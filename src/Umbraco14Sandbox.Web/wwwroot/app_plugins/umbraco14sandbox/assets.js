const s = [
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
        match: "Umb.Section.Content"
      }
    ]
  }
], t = [...s], o = [
  {
    type: "propertyEditorUi",
    name: "Punk.Suggestions",
    alias: "punk.suggestions",
    elementName: "punk-suggestions",
    js: () => import("./suggestions.element-DzKXpY2R.js"),
    meta: {
      label: "Suggestions",
      icon: "icon-list",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.String"
    }
  }
], a = [...o], e = [
  ...t,
  ...a
], r = (i, n) => {
  n.registerMany(e);
};
export {
  r as onInit
};
//# sourceMappingURL=assets.js.map
