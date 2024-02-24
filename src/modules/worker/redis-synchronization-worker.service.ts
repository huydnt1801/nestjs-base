// import { BlindBox, Game, ReferralReward, User } from 'src/database/entities';
// import { getLogger } from 'src/shared/logger';
// import { DataSource, EntityManager, MoreThan, Repository, getConnection } from 'typeorm';
// import { RedisClient } from '../redis/redis.constants';
// import { IReadConsumerGroupParams } from '../redis/interface/IReadConsumerGroupParams';
// import { IAcknowledgeMessageParams } from '../redis/interface/IAcknowledgeMessageParams';
// import { IConsumeStreamParams } from '../redis/interface/IConsumeStreamParams';
// import { IAutoClaimMessageParams } from '../redis/interface/IAutoClaimMessageParams';
// import { XReadGroupOptions } from '@redis/client/dist/lib/commands/XREADGROUP';
// import { ClientClosedError, commandOptions } from 'redis';
// import { FarmHelperService } from '../farm/farm-helper.service';
// import BigNumber from 'bignumber.js';
// import { GameEvents } from 'src/constants/constants';
// import { GameBetType, GameStatus } from 'src/shared/enums';

// const logger = getLogger('RedisSynchronizationWorker');

// const BATCH_LIMIT = 20;

// export class RedisSynchronizationWorker {
//     // gen a random number from 10000 - 99999
//     private readonly consumerId = Math.floor(Math.random() * 90000) + 10000;
//     private readonly farmHelperService: FarmHelperService;

//     constructor(
//         private readonly gameRepository: Repository<Game>,
//         private readonly redis: RedisClient,
//         private AppDataSource: DataSource,
//     ) {
//         this.farmHelperService = new FarmHelperService(this.AppDataSource);
//         this.setup();
//     }

//     // set up consumer group with consumer id
//     async setup() {
//         this.doSyncJob();
//     }

//     // handle synchronization from redis to database
//     async doSyncJob() {
//         logger.info(`${process.env.REDIS_STREAM_NAME} - ${process.env.REDIS_GROUP_NAME} - ${this.consumerId}`);
//         logger.info(
//             `Starting to read from stream: ${
//                 process.env.REDIS_STREAM_NAME
//             } with consumer: ${this.consumerId.toString()}`,
//         );
//         let fetchNewMessages = true;
//         do {
//             try {
//                 await this.synchronize({
//                     streamName: process.env.REDIS_STREAM_NAME,
//                     group: process.env.REDIS_GROUP_NAME,
//                     consumer: this.consumerId.toString(),
//                     count: BATCH_LIMIT, // 0 mean just only one pending message
//                     blockMs: 1000,
//                     autoClaimMinIdleTimeMs: 1000,
//                     autoAck: true,
//                     fetchNewMessages: fetchNewMessages,
//                 });
//             } catch (e) {
//                 logger.error(`RedisSynchronizationWorker::synchronize error - ${e.message}`);
//             }

//             // switch to auto claim mode
//         } while (true);
//     }

//     public async synchronize({
//         streamName,
//         group,
//         consumer,
//         count,
//         blockMs,
//         autoClaimMinIdleTimeMs,
//         autoAck = true,
//         fetchNewMessages = true,
//     }: IReadConsumerGroupParams) {
//         let response: any[];
//         if (fetchNewMessages) {
//             response = await this.readConsumerGroup({
//                 streamName,
//                 group,
//                 consumer,
//                 blockMs: blockMs, // 0 = infinite blocking until at least one message is fetched, or timeout happens
//                 count,
//             });
//             if (response?.length) {
//                 // logger.info(`Fetched ${response?.length} new messages`);
//             }
//         } else {
//             // Try to auto claim messages that are idle for a certain amount of time
//             response = await this.autoClaimMessage({
//                 streamName,
//                 group,
//                 consumer,
//                 count,
//                 minIdleTimeMs: autoClaimMinIdleTimeMs || 10000,
//             });
//             if (response?.length) {
//                 logger.info(`Auto claimed ${response?.length} messages`);
//             }
//         }

//         if (!response || response.length === 0) {
//             return;
//         }

//         for (const res of response) {
//             if (res?.message?.type != 2) {
//                 logger.info(`Received message: ${JSON.stringify(res)}`);
//                 await this.handleMessageUpdateGame(JSON.parse(res.message.data));
//             }
//         }

//         // Acknowledge messages if autoAck is enabled
//         if (autoAck && response?.length > 0) {
//             await this.acknowledgeMessages({
//                 streamName,
//                 group,
//                 messageIds: response.map((m) => m.id),
//             });
//             // logger.info(`Acknowledged and deleted ${response?.length} messages`);
//         }
//     }

//     private async handleMessageUpdateGame(data) {
//         const [type, res] = data.packet.data;
//         switch (type) {
//             case GameEvents.GAME_REQUEST:
//                 this.gameRepository.update(
//                     { code: res.code },
//                     {
//                         status: GameStatus.REQUESTING,
//                     },
//                 );
//                 break;
//             case GameEvents.GAME_RESPONSE:
//                 if (res.result == 'reject') {
//                     this.gameRepository.update(
//                         { code: res.code },
//                         {
//                             status: GameStatus.PENDING,
//                         },
//                     );
//                 }
//                 break;
//             case GameEvents.GAME_STARTED:
//                 this.gameRepository.update(res.game.id, {
//                     status: GameStatus.PLAYING,
//                 });
//                 break;
//             case GameEvents.GAME_RESULT:
//                 await this.AppDataSource.transaction(async (manager) => {
//                     await manager.update(Game, res.game.id, {
//                         status: GameStatus.FINISHED,
//                         winner: { id: res.winner },
//                     });
//                     const loser = res.game.players.filter((player) => player.userId != res.winner)[0];
//                     switch (res.game.betType) {
//                         case GameBetType.BOOST:
//                             logger.info(`transfer boost: loserId ${loser.userId} -> winnerId ${res.winner}`);
//                             await this.transferRefBoost(manager, loser.userId, res.winner);
//                             break;
//                         case GameBetType.BLIND_BOX:
//                             logger.info(
//                                 `transfer blind box: loserId ${loser.userId} -> winnerId ${res.winner}, blindBoxId ${loser.blindBoxId} amount ${loser.blindBoxAmount}`,
//                             );
//                             await this.transferBlindBox(
//                                 manager,
//                                 loser.userId,
//                                 res.winner,
//                                 loser.blindBoxId,
//                                 loser.blindBoxAmount,
//                             );
//                             break;
//                         default:
//                             break;
//                     }
//                     await this.redis.del(`game_${res.game.code}`);
//                 });
//                 break;
//             default:
//                 break;
//         }
//     }

//     public async readConsumerGroup({
//         streamName,
//         group,
//         consumer,
//         blockMs,
//         count,
//     }: IConsumeStreamParams): Promise<any> {
//         let response: any = null;
//         try {
//             let options: XReadGroupOptions = {};
//             if (blockMs) {
//                 options = {
//                     BLOCK: blockMs,
//                 };
//             }
//             if (count) {
//                 options = {
//                     ...options,
//                     COUNT: count,
//                 };
//             }

//             response = await this.redis.xReadGroup(
//                 commandOptions({ isolated: true }), // uses new connection from pool not to block other redis calls
//                 group,
//                 consumer,
//                 {
//                     key: streamName,
//                     id: '>', // fetch only messages that were never delivered to any other consumer
//                 },
//                 options,
//             );
//         } catch (error) {
//             if (error instanceof ClientClosedError) {
//                 logger.error(`${error.message} ...RECONNECTING`);
//                 await this.connectToRedis();
//                 return null;
//             }
//             if (error.message.includes('NOGROUP')) {
//                 logger.error(`${error.message} ...CREATING GROUP`);
//                 await this.createConsumerGroup(streamName, group);
//                 return null;
//             }
//             logger.error(`Failed to xReadGroup from Redis stream: ${error.message}`);

//             return null;
//         }

//         const messages = response?.[0]?.messages; // returning first stream (since only 1 stream used)
//         return messages || null;
//     }

//     public async acknowledgeMessages({ streamName, group, messageIds }: IAcknowledgeMessageParams): Promise<void> {
//         try {
//             await this.redis.xAck(streamName, group, messageIds);
//             // logger.info(`Acknowledged messages: ${messageIds}`);
//             await this.redis.xDel(streamName, messageIds);
//             // logger.info(`Deleted messages: ${messageIds}`);
//         } catch (error) {
//             if (error instanceof ClientClosedError) {
//                 logger.info(`${error.message} ...RECONNECTING`);
//                 await this.connectToRedis();
//                 return null;
//             }
//             logger.error(`Failed to xAck from Redis stream: ${error.message}`);
//             return null;
//         }
//     }

//     public async autoClaimMessage({ streamName, group, consumer, minIdleTimeMs, count }: IAutoClaimMessageParams) {
//         let response: any = null;
//         try {
//             response = await this.redis.xAutoClaim(
//                 streamName,
//                 group,
//                 consumer,
//                 minIdleTimeMs,
//                 '0-0', // use 0-0 to claim all messages. In case of multiple consumers, this will be used to claim messages from other consumers
//                 {
//                     COUNT: count,
//                 },
//             );
//         } catch (error) {
//             if (error instanceof ClientClosedError) {
//                 logger.info(`${error.message} ...RECONNECTING`);
//                 await this.connectToRedis();
//                 return null;
//             }
//             logger.error(`Failed to xAutoClaim from Redis stream: ${error.message}`);
//             return null;
//         }
//         return response?.messages || null;
//     }

//     private async connectToRedis() {
//         try {
//             // Try to reconnect only if the connection socket is closed. Else let it be handled by reconnect strategy.
//             if (!this.redis.isOpen) {
//                 await this.redis.connect();
//             }
//         } catch (error) {
//             logger.error(`[${error.name}] ${error.message}`);
//         }
//     }

//     private async createConsumerGroup(streamName: string, group: string) {
//         try {
//             await this.redis.xGroupCreate(
//                 streamName,
//                 group,
//                 '0', // use 0 to create group from the beginning of the stream, use '$' to create group from the end of the stream
//                 {
//                     MKSTREAM: true,
//                 },
//             );
//         } catch (error) {
//             if (error.message.includes('BUSYGROUP')) {
//                 // Consumer group already exists
//                 return;
//             }
//             if (error instanceof ClientClosedError) {
//                 logger.info(`${error.message} ...RECONNECTING`);
//                 await this.connectToRedis();
//                 return null;
//             }
//             logger.error(`Failed to xGroupCreate: ${error.message}`);
//             return null;
//         }
//     }

//     private async transferBlindBox(
//         manager: EntityManager,
//         senderId: number,
//         receiverId: number,
//         blindBoxId: number,
//         blindBoxAmount: number,
//     ) {
//         const sender = await manager.getRepository(User).findOneBy({ id: senderId });
//         const receiver = await manager.getRepository(User).findOneBy({ id: receiverId });
//         const blindBox = await manager.getRepository(BlindBox).findOne({
//             where: {
//                 id: blindBoxId,
//                 user: { id: senderId },
//             },
//             relations: {
//                 user: true,
//                 type: true,
//             },
//         });

//         if (!sender || !receiver || !blindBox) {
//             // check flow again
//             return;
//         }

//         if (blindBox.user.id !== sender.id) {
//             // check flow again
//             return;
//         }

//         // transfer blind box to receiver
//         let receiverBlindBox = await manager.getRepository(BlindBox).findOne({
//             where: {
//                 user: { id: receiverId },
//                 type: { id: blindBox.type.id },
//             },
//         });
//         if (!receiverBlindBox) {
//             receiverBlindBox = new BlindBox();
//             receiverBlindBox.user = receiver;
//             receiverBlindBox.type = blindBox.type;
//             receiverBlindBox.amount = 0;
//         }

//         receiverBlindBox.amount = Number(receiverBlindBox.amount) + blindBoxAmount;
//         blindBox.amount = Number(blindBox.amount) - blindBoxAmount;

//         if (blindBox.amount === 0) {
//             await manager.getRepository(BlindBox).save(receiverBlindBox);
//             await manager.getRepository(BlindBox).delete(blindBox.id);
//         } else {
//             await manager.getRepository(BlindBox).save([blindBox, receiverBlindBox]);
//         }

//         return true;
//     }

//     private async transferRefBoost(manager, senderId: number, receiverId: number) {
//         const sender = await manager.getRepository(User).findOneBy({ id: senderId });
//         const receiver = await manager.getRepository(User).findOneBy({ id: receiverId });
//         if (!sender || !receiver) {
//             // check flow again
//             return;
//         }

//         const now = Date.now();
//         await this.farmHelperService.calculateEarning(sender.id, now);
//         await this.farmHelperService.calculateEarning(receiver.id, now);

//         const referralRewards = await manager.getRepository(ReferralReward).find({
//             where: {
//                 referrer: { id: sender.id },
//                 endTime: MoreThan<number>(now),
//             },
//         });

//         for (const referralReward of referralRewards) {
//             sender.lastRefSpentAmount = +new BigNumber(sender.lastRefSpentAmount).minus(referralReward.spentAmount);
//             receiver.lastRefSpentAmount = +new BigNumber(receiver.lastRefSpentAmount).plus(referralReward.spentAmount);
//         }

//         sender.lastRefBoost = +this.farmHelperService.calcRefBoost(sender.lastRefSpentAmount.toString());
//         receiver.lastRefBoost = +this.farmHelperService.calcRefBoost(receiver.lastRefSpentAmount.toString());

//         await manager.getRepository(User).save([sender, receiver]);

//         return true;
//     }

//     async delay(t) {
//         return new Promise((resolve) => setTimeout(resolve, t));
//     }
// }
