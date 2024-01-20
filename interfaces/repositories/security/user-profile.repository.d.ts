import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface IUserProfileRepository<T> extends IBaseWriteRepository<T>, IBaseReadRepository<T> {
}
