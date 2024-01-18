import { AuthRepository } from "./../repositories";
import { Http } from "./../http/http";
export declare class SettingTodo247 {
    private endPoint;
    http: Http;
    Auth: AuthRepository;
    constructor(_urlBase: string);
}
