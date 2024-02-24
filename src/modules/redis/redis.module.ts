require('dotenv').config();
import { Module } from '@nestjs/common';

import { REDIS } from './redis.constants';
import { redisClientFactory } from './redis-client.factory';

@Module({
    providers: [redisClientFactory],
    exports: [REDIS],
})
export class RedisModule {}
