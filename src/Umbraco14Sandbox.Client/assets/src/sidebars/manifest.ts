import { ManifestMenu, ManifestMenuItem, ManifestSectionSidebarApp, } from "@umbraco-cms/backoffice/extension-registry";

const sidebarAppManifest : ManifestSectionSidebarApp = {
    type: 'sectionSidebarApp',
    kind: 'menuWithEntityActions',
    alias: 'punk.sidebar.app',
    name: 'Punk app',
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
};
const menuManifest: ManifestMenu = {
    type: 'menu',
    alias: 'punk.menu',
    name: 'punk sidebar menu',
    meta: {
        label: 'Punk'
    }
}

const menuItemManifest: ManifestMenuItem = {
    type: 'menuItem',
    alias: 'punk.menu.item',
    name: 'punk menu item',
    meta: {
        label: 'Punks',
        icon: 'icon-umbraco',
        entityType: 'punk-workspace',
        menus: [
            'punk.menu'
        ]
    }
}

export const manifests = [
    sidebarAppManifest,
    menuManifest,
    menuItemManifest
];