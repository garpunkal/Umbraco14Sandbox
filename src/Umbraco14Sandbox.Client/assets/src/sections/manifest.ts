import { ManifestSection } from "@umbraco-cms/backoffice/extension-registry";

const sectionManifest : ManifestSection = {
    type: 'section',
    alias: 'punk.section',
    name: 'Punk section',
    weight: 10,
    meta: {
        label: 'Punk',
        pathname: 'Punk'
    }
}

export const manifests = [sectionManifest];