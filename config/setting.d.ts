import { AuthRepository, CodeRepository, UserProfileRepository, UserRepository } from "./../repositories";
import { Http } from "./../http/http";
import { TransportRepository } from "./../repositories/carrier/transport.repository";
import { TransportLocationRepository } from "./../repositories/carrier/transport-location.repository";
import { TransportQualificationRepository } from "./../repositories/carrier/transport-qualification.repository";
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
