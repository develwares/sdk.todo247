import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface ICodeRepository<T> extends IBaseWriteRepository<T>, IBaseReadRepository<T> {
}
