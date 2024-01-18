"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
class AuthRepository {
    constructor(_http, _adminUser, _adminPassword, _apiUrl) {
        this.adminUser = '';
        this.adminPassword = '';
        this.apiUrl = '';
        this.http = _http;
        this.adminUser = _adminUser;
        this.adminPassword = _adminPassword;
        this.apiUrl = _apiUrl;
    }
    async getAdminToken() {
        try {
            const response = await this.http.authenticationBasic(`${this.apiUrl}/admin-token`, {
                username: this.adminUser,
                password: this.adminPassword
            });
            return response;
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    async login(data) {
        try {
            const response = await this.http.post(`${this.apiUrl}/login`, data);
            return response;
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    async refreshToken(data) {
        try {
            const accessToken = data.accessToken;
            const refreshToken = data.refreshToken;
            const response = await this.http.post(`${this.apiUrl}/refresh`, {
                userId: '',
                accessToken,
                refreshToken,
            });
            return response;
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    createAccount(data, adminToken) {
        try {
            return this.http.post(`${this.apiUrl}/create-account`, data, { 'Authorization': `Bearer ${adminToken}` });
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    createCode(data, adminToken) {
        try {
            return this.http.post(`${this.apiUrl}/create-code`, data, { 'Authorization': `Bearer ${adminToken}` });
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    generateNewCode(data, adminToken) {
        try {
            return this.http.post(`${this.apiUrl}/generate-new-code`, data, { 'Authorization': `Bearer ${adminToken}` });
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
    validateCellPhone(data, adminToken) {
        try {
            return this.http.post(`${this.apiUrl}/validate-cellphone`, data, { 'Authorization': `Bearer ${adminToken}` });
        }
        catch (error) {
            console.log({ error });
            throw error;
        }
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map