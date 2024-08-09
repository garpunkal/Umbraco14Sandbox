import type { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";

const propertyEditors: Array<ManifestPropertyEditorUi> = [
    {
        type: 'propertyEditorUi',
        name: 'Punk.Suggestions',
        alias: 'punk.suggestions',
        elementName: 'punk-suggestions',
        js: ()=> import('./suggestions.element.js'),
        meta: {
            label: "Suggestions",
            icon: "icon-list",
            group: "common",
            propertyEditorSchemaAlias: "Umbraco.Plain.String"
        },
      
    }
]

export const manifests = [...propertyEditors];