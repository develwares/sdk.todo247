import { AuthRepository, CodeRepository, TransportLocationRepository, TransportQualificationRepository, TransportRepository, UserProfileRepository, UserRepository } from "./../repositories";
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
    Carrier: {
        Transport: TransportRepository;
        TransportLocation: TransportLocationRepository;
        TransportQualitfication: TransportQualificationRepository;
    };
    constructor(_urlBase: string);
}
