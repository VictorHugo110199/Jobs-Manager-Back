export interface iCreateCvRequest {
    title: string;
    url: string;
}

export interface iCreateCvResponse {
    id: string;
    title: string;
    url: string;
    isActive: boolean;
}

export interface iUpdateCvRequest {
    title?: string;
    url?: string;
    isActive?: boolean;
}

export interface iUpdateCvResponse extends iCreateCvResponse {}

export interface iGetCvRequest extends iCreateCvResponse {}