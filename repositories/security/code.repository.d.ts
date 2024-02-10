import { CodeModel, CreateCodeModel, UpdateCodeModel } from "@todo247/common";
import { BaseRepository } from "../base.repository";
import { ICodeRepository } from "src/interfaces";
export declare class CodeRepository extends BaseRepository<CodeModel, CreateCodeModel, UpdateCodeModel> implements ICodeRepository<CodeModel, CreateCodeModel, UpdateCodeModel> {
}
