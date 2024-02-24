import { IStreamParamsBase } from "./IStreamParamBase";

export interface IReadStreamParams extends IStreamParamsBase {
  /** ID of last fetched message */
  lastMessageId: string;
}
