import { ManifestModal, ManifestWorkspace, ManifestWorkspaceAction, ManifestWorkspaceContext, ManifestWorkspaceView } from "@umbraco-cms/backoffice/extension-registry";

var workspace : ManifestWorkspace = {
    type: 'workspace',
    alias: 'punk.workspace',
    name: 'punk workspace',
    js: ()=> import('./workspace.element'),   
    meta: {
        entityType: 'punk-workspace'
    }
};

var workspaceViews : Array<ManifestWorkspaceView> = [
    {
        type: 'workspaceView',
        alias: 'punk.workspace.default',
        name: 'default view',
        js: () => import('./views/defaultWorkspace.element'),
        weight: 300,
        meta: {
           icon: 'icon-alarm-clock',
           pathname: 'overview',
           label: 'punk'
        },
        conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias
			},
		],    
    },
    {
        type: 'workspaceView',
        alias: 'punk.workspace.settings',
        name: 'setting view',
        js: ()=> import('./views/settingsWorkspace.element'),
        weight: 200,
        meta: {
            icon: 'icon-settings',
            pathname: 'settings',
            label: 'settings'
        },
        conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias
			},
		],
    },
    {
        type: "workspaceView",
        alias: 'punk.workspace.dialogs',
        name: 'dialogs',
        js: ()=> import('./views/dialogsWorkspace.element'),
        weight: 50,
        meta: {
            icon: 'icon-app',
            pathname: 'dialogs',
            label: 'Dialogs'
        },
        conditions: [
            {
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias
            }
        ]
    }
];


const context : ManifestWorkspaceContext = {
    type: 'workspaceContext',
    alias: 'punk.workspace.context',
    name: 'punk workspace context',
    js: ()=> import('./context.ts'),
}

const workspaceActions: Array<ManifestWorkspaceAction> = [];

const workspaceModals : Array<ManifestModal> = [];

export const manifests = [
    context, 
    workspace, 
    ...workspaceViews, 
    ...workspaceActions, 
    ...workspaceModals];