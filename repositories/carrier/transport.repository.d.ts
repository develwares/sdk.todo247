import { CreateTransportModel, IResponse, TransportModel, UpdateTransportModel } from "todo247-common";
import { BaseRepository } from "../base.repository";
import { ITransportRepository } from "src/interfaces/repositories/carrier";
export declare class TransportRepository extends BaseRepository<TransportModel, CreateTransportModel, UpdateTransportModel> implements ITransportRepository<TransportModel, CreateTransportModel, UpdateTransportModel> {
    currentByUser(userId: string, userToken: string): Promise<IResponse<TransportModel>>;
    currentByCarrier(carrierId: string, userToken: string): Promise<IResponse<TransportModel>>;
}
