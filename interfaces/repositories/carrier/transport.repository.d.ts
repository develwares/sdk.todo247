import { IBaseWriteRepository } from "../base-write.repository";
import { IBaseReadRepository } from "../base-read.repository";
import { IResponse, TransportModel } from "@todo247/common";
export interface ITransportRepository<T, C, U> extends IBaseWriteRepository<T, C, U>, IBaseReadRepository<T> {
    currentByUser(userId: string, userToken: string): Promise<IResponse<TransportModel>>;
    currentByCarrier(carrierId: string, userToken: string): Promise<IResponse<TransportModel>>;
}
