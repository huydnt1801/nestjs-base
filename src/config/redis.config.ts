import { StoreConfig } from 'cache-manager';
import { CacheModuleOptions } from '@nestjs/common/cache/interfaces/cache-module.interface';
import * as redisStore from 'cache-manager-redis-store';

interface RedisConfig extends StoreConfig {
  host: string;
  port: string;
  db: string;
}

export const redisConfig: CacheModuleOptions<RedisConfig> = {
  store: redisStore,
  ttl: Number(process.env.EXPRIRE_TIME_CODE) / 1000,
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  db: process.env.REDIS_DB_CACHE,
  isGlobal: true,
};
