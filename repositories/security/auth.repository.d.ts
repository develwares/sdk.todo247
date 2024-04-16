import { CodeModel, IResponse } from "todo247-common";
import { IAuthRepository } from "../../interfaces/repositories/security/auth.repository";
import { IAdminTokenResponse } from "../../interfaces/responses/admin-token.response";
import { Http } from "../../http/http";
import { CellPhoneExistsDto, ICreateAccountDto, ICreateCodeDto, ILoginDto, IValidateCellPhoneDto } from "../../interfaces/dtos";
import { ILoginResponse } from "../../interfaces/responses/login.response";
import { IRefreshDto } from "../../interfaces/dtos/security/auth/refresh.dto";
import { IAdminTokenDto } from "../../interfaces/dtos/security/auth/admin-token.dto";
export declare class AuthRepository implements IAuthRepository {
    private http;
    private apiUrl;
    constructor(_http: Http, _apiUrl: string);
    getAdminToken(data: IAdminTokenDto): Promise<IResponse<IAdminTokenResponse>>;
    login(data: ILoginDto): Promise<IResponse<ILoginResponse>>;
    refreshToken(data: IRefreshDto): Promise<IResponse<ILoginResponse>>;
    createAccount(data: ICreateAccountDto, adminToken: string): Promise<IResponse<ILoginResponse>>;
    createCode(data: ICreateCodeDto, adminToken: string): Promise<IResponse<CodeModel>>;
    generateNewCode(data: ICreateCodeDto, adminToken: string): Promise<IResponse<CodeModel>>;
    validateCellPhone(data: IValidateCellPhoneDto, adminToken: string): Promise<IResponse<boolean>>;
    generateCodeLogin(data: CellPhoneExistsDto, adminToken: string): Promise<IResponse<CodeModel>>;
}
