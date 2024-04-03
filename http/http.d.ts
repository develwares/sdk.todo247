import { IResponse } from 'todo247-common';
export declare class Http {
    private urlBase;
    constructor(_urlBase: string);
    authenticationBasic<T>(url: string, params: {
        username: string;
        password: string;
    }): Promise<IResponse<T>>;
    get<T>(url: string, params?: {}, headers?: {}): Promise<IResponse<T>>;
    post<T>(url: string, data?: any, headers?: {}): Promise<IResponse<T>>;
    put<T>(url: string, data?: any, headers?: {}): Promise<IResponse<T>>;
    delete<T>(url: string, headers?: {}): Promise<IResponse<T>>;
    instance(): import("axios").AxiosStatic;
    private static setHeaders;
}
