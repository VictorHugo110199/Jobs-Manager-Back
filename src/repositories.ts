import AppDataSource from "./data-source";
import { User } from "./entities/User";
import { Cv } from "./entities/Cv";
import { Site } from "./entities/Site";


export const userRepository = AppDataSource.getRepository(User)
export const cvRepository = AppDataSource.getRepository(Cv)
export const siteRepository = AppDataSource.getRepository(Site)