"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportRepository = void 0;
const base_repository_1 = require("../base.repository");
class TransportRepository extends base_repository_1.BaseRepository {
    async currentByUser(userId, userToken) {
        return this.http.get(`${this.apiUrl}/by-user/${userId}`, {}, { 'Authorization': `Bearer ${userToken}` });
    }
    async currentByCarrier(carrierId, userToken) {
        return this.http.get(`${this.apiUrl}/by-carrier/${carrierId}`, {}, { 'Authorization': `Bearer ${userToken}` });
    }
}
exports.TransportRepository = TransportRepository;
//# sourceMappingURL=transport.repository.js.map