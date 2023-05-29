import { iGetCvRequest } from "./Cv.interfaces";
import { iGetSiteRequest } from "./Site.interfaces";

export interface iCreateUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface iCreateUserResponse {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface iUserUpdateRequest {
    name?: string;
    email?: string;
    password?: string;
}

export interface iUserUpdateResponse extends iCreateUserResponse {}

export interface iGetUser extends iCreateUserResponse {
    cvs: iGetCvRequest[];
    sites: iGetSiteRequest[];
}