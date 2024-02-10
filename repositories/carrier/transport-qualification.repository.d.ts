import { CreateTransportQualificationModel, TransportQualificationModel, UpdateTransportQualificationModel } from "@todo247/common";
import { BaseRepository } from "../base.repository";
import { ITransportQualificationRepository } from "src/interfaces/repositories/carrier";
export declare class TransportQualificationRepository extends BaseRepository<TransportQualificationModel, CreateTransportQualificationModel, UpdateTransportQualificationModel> implements ITransportQualificationRepository<TransportQualificationModel, CreateTransportQualificationModel, UpdateTransportQualificationModel> {
}
