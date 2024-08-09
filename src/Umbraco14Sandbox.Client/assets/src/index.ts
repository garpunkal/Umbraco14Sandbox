import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

import { manifests as dashboardManifests } from './dashboards/manifest';

const manifests: Array<ManifestTypes> = [
    ...dashboardManifests
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {

    extensionRegistry.registerMany(manifests);
};