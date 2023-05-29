import * as express from "express";
import { iCreateUserRequest, iUserUpdateRequest } from "../../interfaces/User.interfaces";
import { iCreateCvRequest, iUpdateCvRequest } from "../../interfaces/Cv.interfaces";
import { iCreateSiteRequest, iUpdateSiteRequest } from "../../interfaces/Site.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      validate: iCreateUserRequest | iUserUpdateRequest | iCreateCvRequest | iUpdateCvRequest | iCreateSiteRequest | iUpdateSiteRequest
    }
  }
}