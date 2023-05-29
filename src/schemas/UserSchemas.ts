import * as yup from "yup"
import { iCreateUserRequest, iCreateUserResponse, iGetUser, iUserUpdateRequest, iUserUpdateResponse } from "../interfaces/User.interfaces"

export class UserSchemas {
    static createUserRequestSchemas: yup.SchemaOf<iCreateUserRequest> = yup
    .object()
    .shape({
        name: yup.string().min(3).max(25).trim().required(),
        email: yup.string().email().min(6).max(100).trim().required(),
        password: yup.string().min(6).max(100).trim().required(),
    })

    static createUserResponseSchema: yup.SchemaOf<iCreateUserResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        name: yup.string().min(3).max(25).trim().required(),
        email: yup.string().email().min(6).max(100).trim().required(),
        isActive: yup.boolean().required(),
        createdAt: yup.date().required(),
        updatedAt: yup.date().required(),
    })

    static UpdateUserRequestSchema: yup.SchemaOf<iUserUpdateRequest> = yup
    .object()
    .shape({
        name: yup.string().min(3).max(25).trim().notRequired(),
        email: yup.string().email().min(6).max(100).trim().notRequired(),
        password: yup.string().min(6).max(100).trim().notRequired(),
    })

    static updateUserResponseSchema: yup.SchemaOf<iUserUpdateResponse> = yup
    .object()
    .shape({
        id: yup.string().required(),
        name: yup.string().min(3).max(25).trim().required(),
        email: yup.string().email().min(6).max(100).trim().required(),
        isActive: yup.boolean().required(),
        createdAt: yup.date().required(),
        updatedAt: yup.date().required(),
    })

    static getuserResponseSchema: yup.SchemaOf<iGetUser> = yup
    .object()
    .shape({
        id: yup.string().required(),
        name: yup.string().min(3).max(25).trim().required(),
        email: yup.string().email().min(6).max(100).trim().required(),
        isActive: yup.boolean().required(),
        createdAt: yup.date().required(),
        updatedAt: yup.date().required(),
        cvs: yup.array().of(
            yup.object().shape({
                id: yup.string().required(),
                title: yup.string().min(3).max(25).trim().required(),
                url: yup.string().min(6).max(100).trim().required(),
                isActive: yup.boolean().required(),
            })
        ),
        sites: yup.array().of(
            yup.object().shape({
                id: yup.string().required(),
                name: yup.string().min(3).max(25).trim().required(),
                url: yup.string().min(6).max(100).trim().required(),
                isComplet: yup.boolean().required(),
            })
        ) ,
    })
}