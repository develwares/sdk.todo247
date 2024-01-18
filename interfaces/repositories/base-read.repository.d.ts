import { IResponse } from "@todo247/common";
export interface IBaseReadRepository<T> {
    getAll(param: any): Promise<IResponse<T[]>>;
    getById(id: string): Promise<IResponse<T>>;
}
