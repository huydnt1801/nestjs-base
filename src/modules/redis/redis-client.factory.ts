import { FactoryProvider } from '@nestjs/common';
import { createClient } from 'redis';
import { REDIS, RedisClient } from './redis.constants';

export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
    provide: REDIS,
    useFactory: async () => {
        const client = createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT),
                tls: process.env.REDIS_TLS == 'true',
            },
            database: parseInt(process.env.REDIS_DB_CACHE),
            password: process.env.REDIS_PASS,
        });

        await client.connect();
        return client;
    },
};
