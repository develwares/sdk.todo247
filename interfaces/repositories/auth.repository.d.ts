import { CodeModel, IResponse } from "@todo247/common";
import { ILoginDto } from "../dtos/security/auth/login.dto";
import { ICreateAccountDto } from "../dtos/security/auth/create-account.dto";
import { IValidateCellPhoneDto } from "../dtos/security/auth/validate-cellphone.dto";
import { ICreateCodeDto } from "../dtos/security/code/create-code.dto";
import { ILoginResponse } from "../responses/login.response";
import { IAdminTokenResponse } from "../responses/admin-token.response";
import { IRefreshDto } from "../dtos/security/auth/refresh.dto";
import { IAdminTokenDto } from "../dtos/security/auth/admin-token.dto";
export interface IAuthRepository {
    getAdminToken(data: IAdminTokenDto): Promise<IResponse<IAdminTokenResponse>>;
    login(data: ILoginDto): Promise<IResponse<ILoginResponse>>;
    refreshToken(data: IRefreshDto): Promise<IResponse<ILoginResponse>>;
    createAccount(data: ICreateAccountDto, adminToken: string): Promise<IResponse<ILoginResponse>>;
    createCode(data: ICreateCodeDto, adminToken: string): Promise<IResponse<CodeModel>>;
    generateNewCode(data: ICreateCodeDto, adminToken: string): Promise<IResponse<CodeModel>>;
    validateCellPhone(data: IValidateCellPhoneDto, adminToken: string): Promise<IResponse<boolean>>;
}
