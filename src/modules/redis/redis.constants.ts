import { createClient } from 'redis';
export type RedisClient = ReturnType<typeof createClient>;
export const REDIS = Symbol('AUTH:REDIS');
