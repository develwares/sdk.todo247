import { IResponse, UserModel } from "@todo247/common";
import { IUserRepository } from "../../interfaces/repositories/security/user.repository";
import { BaseRepository } from "../base.repository";
export declare class UserRepository extends BaseRepository<UserModel> implements IUserRepository<UserModel> {
    getProfile(userToken: string): Promise<IResponse<UserModel>>;
}
