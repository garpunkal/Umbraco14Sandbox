import { ManifestElement } from "@umbraco-cms/backoffice/extension-api";
import { ManifestMenu, ManifestMenuItem, ManifestSectionSidebarApp, MetaMenuItem, UmbMenuItemElement } from "@umbraco-cms/backoffice/extension-registry";

const sidebarAppManifest: ManifestSectionSidebarApp = {
    type: 'sectionSidebarApp',
    kind: 'menuWithEntityActions',
    alias: 'punk.sidebar.app',
    name: 'punk app',
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
};

const menuManifest: ManifestMenu = {
    type: 'menu',
    alias: 'punk.menu',
    name: 'punk sidebar menu',
    meta: {
        label: 'punk'
    }
}

const menuItemManifest: ManifestMenuItem = {
    type: 'menuItem',
    alias: 'punk.menu.item',
    name: 'punk menu item',
    meta: {
        label: 'Punk items',
        icon: 'icon-alarm-clock',
        entityType: 'punk-workspace',
        menus: [
            'punk.menu'
        ]
    },
    element: () => import('./nested-menu.element.ts')
}

/**** nested menu items ****/

export interface ManifestTimeMenuItem extends ManifestElement<UmbMenuItemElement> {
    type: 'punk-menu-item';
    meta: MetaMenuItem;
}


const nestedMenuManifest: ManifestMenu = {
    type: 'menu',
    alias: 'punk.nested.menu',
    name: 'Nested menu',
    element: () => import('./nested-menu.element.ts'),
    meta: {
        label: 'Punk items',
        icon: 'icon-alarm-clock',
        entityType: 'punk-workspace',
    }
}

const nestedMenuItems: ManifestTimeMenuItem[] = [
    {
        type: 'punk-menu-item',
        alias: 'punk.nested.menu.child-one',
        name: 'child item',
        weight: 200,
        meta: {
            menus: [nestedMenuManifest.alias],
            icon: 'icon-alarm-clock',
            label: 'child item 1',
            entityType: 'punk-workspace',
        }
    },
    {
        type: 'punk-menu-item',
        alias: 'punk.nested.menu.child-two',
        name: 'child item two',
        weight: 200,
        meta: {
            menus: [nestedMenuManifest.alias],
            icon: 'icon-alarm-clock',
            label: 'child item 2',
            entityType: 'punk-workspace',
        }
    }
];

export const manifests = [
    sidebarAppManifest,
    menuManifest,
    menuItemManifest,
    nestedMenuManifest,
    ...nestedMenuItems,
];