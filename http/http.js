"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = require("axios");
class Http {
    constructor(_urlBase) {
        this.urlBase = '';
        this.urlBase = _urlBase;
    }
    async authenticationBasic(url, params) {
        const response = await axios_1.default.post(`${this.urlBase}${url}`, {
            auth: {
                ...params
            },
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response.data;
    }
    async get(url, params = {}, headers = {}) {
        const response = await axios_1.default.get(`${this.urlBase}${url}`, {
            params,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
    async post(url, data = {}, headers = {}) {
        const response = await axios_1.default.post(`${this.urlBase}${url}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
    async put(url, data = {}, headers = {}) {
        const response = await axios_1.default.put(`${this.urlBase}${url}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
    async delete(url, headers = {}) {
        const response = await axios_1.default.delete(`${this.urlBase}${url}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
    static setHeaders() {
    }
}
exports.Http = Http;
//# sourceMappingURL=http.js.map