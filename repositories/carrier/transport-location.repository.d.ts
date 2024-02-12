import { CreateTransportLocationModel, TransportLocationModel, UpdateTransportLocationModel } from "todo247-common";
import { BaseRepository } from "../base.repository";
import { ITransportLocationRepository } from "src/interfaces/repositories/carrier";
export declare class TransportLocationRepository extends BaseRepository<TransportLocationModel, CreateTransportLocationModel, UpdateTransportLocationModel> implements ITransportLocationRepository<TransportLocationModel, CreateTransportLocationModel, UpdateTransportLocationModel> {
}
