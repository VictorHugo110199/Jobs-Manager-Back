export interface iCreateSiteRequest {
    name: string;
    url: string;
    isComplet: boolean;
}

export interface iCreateSiteResponse {
    id: string;
    name: string;
    url: string;
    isComplet: boolean;
}

export interface iUpdateSiteRequest {
    name?: string;
    url?: string;
    isComplet?: boolean;
}

export interface iUpdateSiteResponse extends iCreateSiteResponse {}

export interface iGetSiteRequest extends iCreateSiteResponse {}