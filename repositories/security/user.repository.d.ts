import { CreateUserModel, IResponse, UpdateUserModel, UserModel } from "@todo247/common";
import { IUserRepository } from "../../interfaces/repositories/security/user.repository";
import { BaseRepository } from "../base.repository";
export declare class UserRepository extends BaseRepository<UserModel, CreateUserModel, UpdateUserModel> implements IUserRepository<UserModel, CreateUserModel, UpdateUserModel> {
    getProfile(userToken: string): Promise<IResponse<UserModel>>;
}
