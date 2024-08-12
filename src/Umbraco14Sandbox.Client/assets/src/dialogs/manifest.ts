import { ManifestModal } from "@umbraco-cms/backoffice/extension-registry";

const modals: Array<ManifestModal> = [
    {
        type: 'modal',
        alias: 'punk.custom.modal',
        name: 'punk custom modal',
        js: () => import('./custom-modal-element.ts')
    }
];

export const manifests = [...modals];