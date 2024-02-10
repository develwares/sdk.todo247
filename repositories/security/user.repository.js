"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const base_repository_1 = require("../base.repository");
class UserRepository extends base_repository_1.BaseRepository {
    async getProfile(userToken) {
        return this.http.get(`${this.apiUrl}/get/profile`, {}, { 'Authorization': `Bearer ${userToken}` });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map