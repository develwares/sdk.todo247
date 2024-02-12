import { IResponse, UserModel } from "todo247-common";
import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface IUserRepository<T, C, U> extends IBaseWriteRepository<T, C, U>, IBaseReadRepository<T> {
    getProfile(userToken: string): Promise<IResponse<UserModel>>;
}
