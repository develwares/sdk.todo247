import { IResponse, UserModel } from "@todo247/common";
import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface IUserRepository<T> extends IBaseWriteRepository<T>, IBaseReadRepository<T> {
    getProfile(userToken: string): Promise<IResponse<UserModel>>;
}
