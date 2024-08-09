const n = [
  {
    type: "dashboard",
    name: "Punk.Dashboard",
    alias: "punk.dashboard",
    elementName: "punk-dashboard",
    js: () => import("./dashboard.element-BY7oNU5Z.js"),
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
], s = [...n], t = [
  ...s
], e = (o, a) => {
  a.registerMany(t);
};
export {
  e as onInit
};
//# sourceMappingURL=assets.js.map
