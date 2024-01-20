"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingTodo247 = void 0;
const repositories_1 = require("./../repositories");
const http_1 = require("./../http/http");
class SettingTodo247 {
    constructor(_urlBase) {
        this.endPoint = {
            auth: '/api/auth',
            user: '/api/user',
            userProfile: '/api/user-profile'
        };
        this.http = new http_1.Http(_urlBase);
        this.Security.Auth = new repositories_1.AuthRepository(this.http, this.endPoint.auth);
        this.Security.User = new repositories_1.UserRepository(this.http, this.endPoint.user);
        this.Security.UserProfile = new repositories_1.UserProfileRepository(this.http, this.endPoint.userProfile);
    }
}
exports.SettingTodo247 = SettingTodo247;
//# sourceMappingURL=setting.js.map