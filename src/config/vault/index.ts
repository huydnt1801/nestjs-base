import { ConfigFactory, ConfigType } from '@nestjs/config';
import appConfig from './app.config';
import databaseConfig from './database.config';
import twitterConfig from './twitter.config';
import authConfig from './auth.config';

export const configFactories: ConfigFactory[] = [appConfig, authConfig, databaseConfig, twitterConfig];

export type AllConfigType = {
    app: ConfigType<typeof appConfig>;
    auth: ConfigType<typeof authConfig>;
    database: ConfigType<typeof databaseConfig>;
    twitter: ConfigType<typeof twitterConfig>;
};
