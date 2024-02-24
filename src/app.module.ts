import { Module, MiddlewareConsumer, Inject, Session } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { DataSource, DataSourceOptions } from 'typeorm';
import { RedisClientType, RedisClientOptions } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './modules/redis/redis.module';
import { TransformInterceptor } from './config/rest/transform.interceptor';
import { ExceptionFilter } from './config/exception/exception.filter';
import { redisConfig } from './config/redis.config';
import { REDIS } from './modules/redis/redis.constants';
import { configFactories } from './config/vault';
import { TypeOrmConfigService } from './database/orm.service';
import { LoggingInterceptor } from './config/rest/logging.interceptor';
import RedisStore from 'connect-redis';
import * as session from 'express-session';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configFactories,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    CacheModule.register<RedisClientOptions>(redisConfig),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClientType) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new RedisStore({ client: this.redis }),
          saveUninitialized: false,
          secret: process.env.SESSION_SECRET,
          resave: false,
          rolling: true,
          proxy: true,
          cookie: {
            maxAge: parseInt(process.env.EXPIRE_REFRESH_SET_COOKIE),
            // sameSite: 'none',
            // secure: true, // not allow in chrome extension
            // httpOnly: true,
            path: '/',
          },
        }),
      )
      .forRoutes('*');
  }
}
