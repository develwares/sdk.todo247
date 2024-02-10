import { IResponse } from "@todo247/common";
import { Http } from "../http/Http";
import { IBaseWriteRepository } from "src/interfaces/repositories/base-write.repository";
import { IBaseReadRepository } from "src/interfaces/repositories/base-read.repository";
export declare abstract class BaseRepository<T, C, U> implements IBaseWriteRepository<T, C, U>, IBaseReadRepository<T> {
    protected http: Http;
    protected apiUrl: string;
    constructor(_http: Http, _apiUrl: string);
    create(entity: C, userToken: string): Promise<IResponse<T>>;
    update(id: string, entity: U, userToken: string): Promise<IResponse<T>>;
    remove(id: string, userToken: string): Promise<IResponse<T>>;
    getAll(param: any, userToken: string): Promise<IResponse<T[]>>;
    getById(id: string, userToken: string): Promise<IResponse<T>>;
}
