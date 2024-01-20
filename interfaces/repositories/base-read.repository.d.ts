import { IResponse } from "@todo247/common";
export interface IBaseReadRepository<T> {
    getAll(param: any, userToken: string): Promise<IResponse<T[]>>;
    getById(id: string, userToken: string): Promise<IResponse<T>>;
}
