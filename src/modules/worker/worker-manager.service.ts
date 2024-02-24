import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyConfig } from 'src/database/entities';
import { S3Handler } from 'src/shared/S3Handler';
import { DataSource, Repository } from 'typeorm';
import { REDIS, RedisClient } from '../redis/redis.constants';

@Injectable()
export class WorkerManagerService {
  constructor(
    @InjectRepository(CurrencyConfig)
    private currenciesRepository: Repository<CurrencyConfig>,
    // @InjectRepository(Config)
    // private configRepository: Repository<Config>,
    // @InjectRepository(Game)
    // private readonly gameRepository: Repository<Game>,

    @Inject(REDIS) private readonly redis: RedisClient,
    private dataSource: DataSource,
    private s3handler: S3Handler,
  ) {
    this.init();
  }

  async init() {
    // console.log('aaaaaaaaa', this.redis);
    // new RedisSynchronizationWorker(this.gameRepository, this.redis, this.dataSource);
    // const currencies = await this.currenciesRepository.find();
    // for (const currency of currencies) {
    //     new FarmWorkerService(currency, this.dataSource);
    //     new LiquidateWorkerService(currency, this.configRepository, this.dataSource);
    // }
  }
}
