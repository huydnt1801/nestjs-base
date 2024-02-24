export interface IAutoClaimMessageParams {
  streamName: string;
  group: string;
  consumer: string;
  minIdleTimeMs: number;
  count: number;
}
