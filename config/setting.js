"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingTodo247 = void 0;
const repositories_1 = require("./../repositories");
const http_1 = require("./../http/http");
class SettingTodo247 {
    constructor(_urlBase) {
        this.endPoint = {
            auth: '/api/auth',
            code: '/api/codes',
            user: '/api/user',
            userProfile: '/api/user-profile',
            transport: '/api/transport',
            transportLocation: '/api/transport-locartion',
            transportQualification: '/api/transport-qualification'
        };
        this.http = new http_1.Http(_urlBase);
        if (!this.Security)
            this.Security = {};
        this.Security = {
            Auth: new repositories_1.AuthRepository(this.http, this.endPoint.auth),
            Code: new repositories_1.CodeRepository(this.http, this.endPoint.code),
            User: new repositories_1.UserRepository(this.http, this.endPoint.user),
            UserProfile: new repositories_1.UserProfileRepository(this.http, this.endPoint.userProfile)
        };
        this.Carrier = {
            Transport: new repositories_1.TransportRepository(this.http, this.endPoint.transport),
            TransportLocation: new repositories_1.TransportLocationRepository(this.http, this.endPoint.transportLocation),
            TransportQualitfication: new repositories_1.TransportQualificationRepository(this.http, this.endPoint.transportQualification)
        };
    }
}
exports.SettingTodo247 = SettingTodo247;
//# sourceMappingURL=setting.js.map