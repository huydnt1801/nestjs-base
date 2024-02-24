import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerModule } from './modules/worker/worker.module';
import { configFactories } from './config/vault';
import { TypeOrmConfigService } from './database/orm.service';
import { DataSource, DataSourceOptions } from 'typeorm';

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
        WorkerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppWorkerModule {}
