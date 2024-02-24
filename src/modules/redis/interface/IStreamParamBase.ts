export interface IStreamParamsBase {
  /** Name of stream to read from */
  streamName: string;
  /** Max time in ms for how long to block Redis connection before returning
   * If 0 is passed, it will block until at least one message is fetched, or timeout happens
   * */
  blockMs?: number;
  /** Max how many messages to fetch at a time from Redis */
  count?: number;
}
