import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export interface PunkCustomModalData {
    headline: string;
    content: string;
}

export interface PunkCustomModalValue {
    content: string 
}

export const TIME_CUSTOM_MODAL = new UmbModalToken<PunkCustomModalData, PunkCustomModalValue>(
    "punk.custom.modal",
    {
        modal: {
            type: 'sidebar',
            size: 'medium'
        }
    }
);