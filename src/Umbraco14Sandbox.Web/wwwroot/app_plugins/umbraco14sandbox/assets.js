const t = [
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
], a = [...t], i = [
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
], s = [...i], o = [
  ...a,
  ...s
], n = (r, e) => {
  e.registerMany(o);
};
export {
  n as onInit
};
//# sourceMappingURL=assets.js.map
