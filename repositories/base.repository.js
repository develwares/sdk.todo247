"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(_http, _apiUrl) {
        this.apiUrl = '';
        this.http = _http;
        this.apiUrl = _apiUrl;
    }
    async create(entity) {
        return this.http.post(this.apiUrl, entity);
    }
    async update(id, entity) {
        return this.http.put(`${this.apiUrl}/${id}`, entity);
    }
    async remove(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    async getAll(param) {
        return this.http.get(this.apiUrl, param);
    }
    async getById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map