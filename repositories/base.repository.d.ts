import { IResponse } from "@todo247/common";
import { Http } from "../http/Http";
import { IBaseWriteRepository } from "src/interfaces/repositories/base-write.repository";
import { IBaseReadRepository } from "src/interfaces/repositories/base-read.repository";
export declare class BaseRepository<T> implements IBaseWriteRepository<T>, IBaseReadRepository<T> {
    private http;
    private apiUrl;
    constructor(_http: Http, _apiUrl: string);
    create(entity: T): Promise<IResponse<T>>;
    update(id: string, entity: T): Promise<IResponse<T>>;
    remove(id: string): Promise<IResponse<T>>;
    getAll(param: any): Promise<IResponse<T[]>>;
    getById(id: string): Promise<IResponse<T>>;
}
