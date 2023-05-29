import * as yup from "yup"
import { iCreateCvRequest, iCreateCvResponse, iUpdateCvRequest, iUpdateCvResponse } from "../interfaces/Cv.interfaces"

export class CvSchemas {
    static createCvRequestSchema: yup.SchemaOf<iCreateCvRequest> = yup
    .object()
    .shape({
        title: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
    })

    static createCvResponseSchema: yup.SchemaOf<iCreateCvResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        title: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
        isActive: yup.boolean().required(),
    })

    static updateCvRequestSchema: yup.SchemaOf<iUpdateCvRequest> = yup
    .object()
    .shape({
        title: yup.string().min(3).max(25).trim().notRequired(),
        url: yup.string().min(6).max(100).trim().notRequired(),
        isActive: yup.boolean().notRequired(),
    })

    static updateCvResponseSchema: yup.SchemaOf<iUpdateCvResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        title: yup.string().min(3).max(25).trim().required(),
        url: yup.string().min(6).max(100).trim().required(),
        isActive: yup.boolean().required(),
    })
}