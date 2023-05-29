import * as yup from "yup"
import { iCreateSiteRequest, iCreateSiteResponse, iUpdateSiteRequest, iUpdateSiteResponse } from "../interfaces/Site.interfaces"

export class SiteSchemas {
    static createSiteRequestSchema: yup.SchemaOf<iCreateSiteRequest> = yup 
    .object()
    .shape({
        name: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
        isComplet: yup.boolean().required(),
    })

    static createSiteResponseSchema: yup.SchemaOf<iCreateSiteResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        name: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
        isComplet: yup.boolean().required(),
    })

    static updateSiteRequestSchema: yup.SchemaOf<iUpdateSiteRequest> = yup
    .object()
    .shape({
        name: yup.string().min(3).max(25).trim().notRequired(),
        url: yup.string().min(6).max(100).trim().notRequired(),
        isComplet: yup.boolean().notRequired(),
    })

    static updateSiteResponseSchema: yup.SchemaOf<iUpdateSiteResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        name: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
        isComplet: yup.boolean().required(),
    })

}