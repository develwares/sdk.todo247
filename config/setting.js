"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingTodo247 = void 0;
const repositories_1 = require("./../repositories");
const http_1 = require("./../http/http");
class SettingTodo247 {
    constructor(_urlBase, _adminUser, _adminPassword) {
        this.urlBase = '';
        this.adminUser = '';
        this.adminPassword = '';
        this.endPoint = {
            auth: '/api/auth',
            user: '/api/user'
        };
        this.urlBase = _urlBase;
        this.adminUser = _adminUser;
        this.adminPassword = _adminPassword;
        this.http = new http_1.Http(_urlBase);
        this.Auth = new repositories_1.AuthRepository(this.http, _adminUser, _adminPassword, this.endPoint.auth);
    }
}
exports.SettingTodo247 = SettingTodo247;
//# sourceMappingURL=setting.js.map