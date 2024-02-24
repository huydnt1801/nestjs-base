import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const databaseConfig: DataSourceOptions = {
    type: process.env.DATABASE_TYPE,
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: process.env.DATABASE_LOGGER === 'true',
    entities: ['dist/database/entities/*.js'],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: false,
    dropSchema: false,
    keepConnectionAlive: true,
    cli: {
        entitiesDir: 'src/',
        migrationsDir: 'src/database/migrations/',
        subscribersDir: 'subscriber',
    },
} as DataSourceOptions;

export default new DataSource(databaseConfig);
