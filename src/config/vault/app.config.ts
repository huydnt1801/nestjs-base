import { registerAs } from '@nestjs/config';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import validateConfig from '../../shared/validate-config';

class Validator {
    @IsNotEmpty()
    NODE_ENV: string;

    @IsNotEmpty()
    APP_NAME: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(65535)
    APP_PORT: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(65535)
    WORKER_PORT: number;
}

export default registerAs('app', () => {
    validateConfig(process.env, Validator);

    return {
        nodeEnv: process.env.NODE_ENV,
        name: process.env.APP_NAME,
        port: Number(process.env.APP_PORT),
        workerPort: Number(process.env.WORKER_PORT),
    };
});
