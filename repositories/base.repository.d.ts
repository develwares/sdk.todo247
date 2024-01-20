import { IResponse } from "@todo247/common";
import { Http } from "../http/Http";
import { IBaseWriteRepository } from "src/interfaces/repositories/base-write.repository";
import { IBaseReadRepository } from "src/interfaces/repositories/base-read.repository";
export declare abstract class BaseRepository<T> implements IBaseWriteRepository<T>, IBaseReadRepository<T> {
    protected http: Http;
    protected apiUrl: string;
    constructor(_http: Http, _apiUrl: string);
    create(entity: T, userToken: string): Promise<IResponse<T>>;
    update(id: string, entity: T, userToken: string): Promise<IResponse<T>>;
    remove(id: string, userToken: string): Promise<IResponse<T>>;
    getAll(param: any, userToken: string): Promise<IResponse<T[]>>;
    getById(id: string, userToken: string): Promise<IResponse<T>>;
}
