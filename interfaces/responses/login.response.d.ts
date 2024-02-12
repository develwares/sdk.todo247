import { UserModel } from "todo247-common";
export interface ILoginResponse {
    user: UserModel;
    accessToken: string;
    refreshToken: string;
    expireIn: string;
}
