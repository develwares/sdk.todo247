import { IResponse } from '@todo247/common';
export declare class Http {
    private urlBase;
    constructor(_urlBase: string);
    authenticationBasic<T>(url: string, params: {
        username: string;
        password: string;
    }): Promise<IResponse<T>>;
    get<T>(url: string, params?: {}): Promise<IResponse<T>>;
    post<T>(url: string, data?: any): Promise<IResponse<T>>;
    put<T>(url: string, data?: any): Promise<IResponse<T>>;
    delete<T>(url: string): Promise<IResponse<T>>;
    private static setHeaders;
}
