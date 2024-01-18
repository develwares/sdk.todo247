import { UserModel } from "./../../models-security";
export interface ILoginResponse {
    user: UserModel;
    accessToken: string;
    refreshToken: string;
    expireIn: string;
}
