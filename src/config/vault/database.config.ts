import { registerAs } from '@nestjs/config';
import { IsBoolean, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import validateConfig from '../../shared/validate-config';

class Validator {
    @IsNotEmpty()
    DATABASE_TYPE: string;

    @IsNotEmpty()
    DATABASE_HOST: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(65535)
    DATABASE_PORT: number;

    @IsNotEmpty()
    DATABASE_USERNAME: string;

    @IsNotEmpty()
    DATABASE_PASSWORD: string;

    @IsNotEmpty()
    DATABASE_NAME: string;

    @IsNotEmpty()
    @IsBoolean()
    DATABASE_SYNCHRONIZE: boolean;

    @IsNotEmpty()
    @IsBoolean()
    DATABASE_LOGGER: boolean;
}

export default registerAs('database', () => {
    validateConfig(process.env, Validator);

    return {
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        logging: process.env.DATABASE_LOGGER === 'true',
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    };
});
