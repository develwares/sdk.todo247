import { AuthRepository, CodeRepository, UserProfileRepository, UserRepository } from "./../repositories";
import { Http } from "./../http/http";
export declare class SettingTodo247 {
    private endPoint;
    http: Http;
    Security: {
        Auth: AuthRepository;
        Code: CodeRepository;
        User: UserRepository;
        UserProfile: UserProfileRepository;
    };
    constructor(_urlBase: string);
}
