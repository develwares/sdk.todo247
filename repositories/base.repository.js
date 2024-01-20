"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(_http, _apiUrl) {
        this.apiUrl = '';
        this.http = _http;
        this.apiUrl = _apiUrl;
    }
    async create(entity, userToken) {
        return this.http.post(this.apiUrl, entity, { 'Authorization': `Bearer ${userToken}` });
    }
    async update(id, entity, userToken) {
        return this.http.put(`${this.apiUrl}/${id}`, entity, { 'Authorization': `Bearer ${userToken}` });
    }
    async remove(id, userToken) {
        return this.http.delete(`${this.apiUrl}/${id}`, { 'Authorization': `Bearer ${userToken}` });
    }
    async getAll(param, userToken) {
        return this.http.get(this.apiUrl, param, { 'Authorization': `Bearer ${userToken}` });
    }
    async getById(id, userToken) {
        return this.http.get(`${this.apiUrl}/${id}`, {}, { 'Authorization': `Bearer ${userToken}` });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map