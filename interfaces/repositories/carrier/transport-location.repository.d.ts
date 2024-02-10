import { IBaseReadRepository } from "../base-read.repository";
import { IBaseWriteRepository } from "../base-write.repository";
export interface ITransportLocationRepository<T, C, U> extends IBaseWriteRepository<T, C, U>, IBaseReadRepository<T> {
}
