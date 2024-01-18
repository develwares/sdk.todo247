import { AuthRepository } from "./../repositories";
import { Http } from "./../http/http";
export declare class SettingTodo247 {
    private urlBase;
    private adminUser;
    private adminPassword;
    private endPoint;
    http: Http;
    Auth: AuthRepository;
    constructor(_urlBase: string, _adminUser: string, _adminPassword: string);
}
