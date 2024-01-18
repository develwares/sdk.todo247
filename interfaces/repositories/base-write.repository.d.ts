import { IResponse } from "@todo247/common";
export interface IBaseWriteRepository<T> {
    create(entity: T): Promise<IResponse<T>>;
    update(id: string, entity: T): Promise<IResponse<T>>;
    remove(id: string): Promise<IResponse<T>>;
}
