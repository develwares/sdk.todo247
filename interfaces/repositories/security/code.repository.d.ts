import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface ICodeRepository<T, C, U> extends IBaseWriteRepository<T, C, U>, IBaseReadRepository<T> {
}
