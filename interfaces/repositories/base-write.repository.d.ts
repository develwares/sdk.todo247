import { IResponse } from "@todo247/common";
export interface IBaseWriteRepository<T, C, U> {
    create(entity: C, userToken: string): Promise<IResponse<T>>;
    update(id: string, entity: U, userToken: string): Promise<IResponse<T>>;
    remove(id: string, userToken: string): Promise<IResponse<T>>;
}
