import { IResponse } from "@todo247/common";
export interface IBaseWriteRepository<T> {
    create(entity: T, userToken: string): Promise<IResponse<T>>;
    update(id: string, entity: T, userToken: string): Promise<IResponse<T>>;
    remove(id: string, userToken: string): Promise<IResponse<T>>;
}
