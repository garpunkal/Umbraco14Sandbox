import type { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";

const propertyEditors: Array<ManifestPropertyEditorUi> = [
    {
        type: 'propertyEditorUi',
        name: 'Punk.Suggestions',
        alias: 'punk.suggestions',
        elementName: 'punk-suggestions',
        js: () => import('./suggestions.element.js'),
        meta: {
            label: "Suggestions",
            icon: "icon-list",
            group: "common",
            propertyEditorSchemaAlias: "Umbraco.Plain.String",
            settings: {
                properties: [
                    {
                        "alias": "disabled",
                        "label": "Disabled",
                        "description": "Disables the suggestion button",
                        "propertyEditorUiAlias": "Umb.PropertyEditorUi.Toggle"
                    },
                    {
                        "alias": "placeholder",
                        "label": "Placeholder text",
                        "description": "A nice placeholder description to help out our editor!",
                        "propertyEditorUiAlias": "Umb.PropertyEditorUi.TextBox"
                    },
                    {
                        "alias": "maxChars",
                        "label": "Max characters allowed",
                        "description": "The maximum number of allowed characters in a suggestion",
                        "propertyEditorUiAlias": "Umb.PropertyEditorUi.Integer"
                    },
                    {
                        "alias": "suggestions",
                        "label": "Suggestions",
                        "description": "A list of suggestions to suggest",
                        "propertyEditorUiAlias": "Umb.PropertyEditorUi.TextArea" 
                    }
                ],
                defaultData: [
                    {
                        "alias": "disabled",
                        "value": true
                    },
                    {
                        "alias": "placeholder",
                        "value": "Write a suggestion"
                    },
                    {
                        "alias": "maxChars",
                        "value": 50
                    }
                ]
            }
        },
    }
]

export const manifests = [...propertyEditors];