import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'Punk.Dashboard',
        alias: 'punk.dashboard',
        elementName: 'punk-dashboard',
        js: ()=> import('./dashboard.element.js'),
        weight: -10,
        meta: {
            label: 'Punk Dashboard',
            pathname: 'punk-dashboard'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: 'Umb.Section.Content'
            }
        ]
    }
]

export const manifests = [...dashboards];