import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

import { manifests as dashboardManifests } from './dashboards/manifest';
import { manifests as propertyEditorsManifests } from './propertyEditors/manifest';
import { manifests as sectionManifests } from './sections/manifest';
import { manifests as sidebarManifests } from './sidebars/manifest';
import { manifests as workspacesManifests } from './workspaces/manifest';
import { manifests as dialogManifests } from './dialogs/manifest';

const manifests: Array<ManifestTypes> = [
    ...dashboardManifests,
    ...propertyEditorsManifests,
    ...sectionManifests,
    ...sidebarManifests,
    ...workspacesManifests,
    ...dialogManifests
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    extensionRegistry.registerMany(manifests);
};