import { CreateUserProfileModel, UpdateUserProfileModel, UserProfileModel } from "todo247-common";
import { BaseRepository } from "../base.repository";
import { IUserProfileRepository } from "src/interfaces";
export declare class UserProfileRepository extends BaseRepository<UserProfileModel, CreateUserProfileModel, UpdateUserProfileModel> implements IUserProfileRepository<UserProfileModel, CreateUserProfileModel, UpdateUserProfileModel> {
}
