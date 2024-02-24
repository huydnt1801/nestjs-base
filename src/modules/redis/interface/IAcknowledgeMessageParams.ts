export interface IAcknowledgeMessageParams {
  /** Name of stream to acknowledge message in */
  streamName: string;
  /** Name of consumer group */
  group: string;
  /** ID of messages to acknowledge */
  messageIds: string[];
}
