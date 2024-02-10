"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportRepository = void 0;
const base_repository_1 = require("../base.repository");
class TransportRepository extends base_repository_1.BaseRepository {
    async currentByUser(userId, userToken) {
        return this.http.get(this.apiUrl, { userId }, { 'Authorization': `Bearer ${userToken}` });
    }
    async currentByCarrier(carrierId, userToken) {
        return this.http.get(this.apiUrl, { carrierId }, { 'Authorization': `Bearer ${userToken}` });
    }
}
exports.TransportRepository = TransportRepository;
//# sourceMappingURL=transport.repository.js.map