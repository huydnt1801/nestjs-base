import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, CurrencyConfig } from '../../database/entities';
import { ScheduleModule } from '@nestjs/schedule';
import { WorkerManagerService } from './worker-manager.service';
import { S3Handler } from 'src/shared/S3Handler';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, CurrencyConfig]),
    RedisModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  exports: [],
  providers: [WorkerManagerService, S3Handler],
})
export class WorkerModule {}
