import { IStreamParamsBase } from "./IStreamParamBase";

export interface IConsumeStreamParams extends IStreamParamsBase {
  /** Name of consumer group */
  group: string;
  /** Name of consumer, must be unique within group */
  consumer: string;
}
