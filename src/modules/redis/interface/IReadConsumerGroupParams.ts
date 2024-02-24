export interface IReadConsumerGroupParams {
  streamName: string;
  group: string;
  consumer: string;
  count: number;
  blockMs?: number;
  autoClaimMinIdleTimeMs?: number;
  autoAck?: boolean;
  fetchNewMessages?: boolean;
}
