import { registerAs } from '@nestjs/config';
import { IsInt, IsString } from 'class-validator';
import validateConfig from 'src/shared/validate-config';

class Validator {
    @IsString()
    AUTH_JWT_SECRET: string;

    @IsString()
    AUTH_JWT_TOKEN_EXPIRES_IN: string;

    @IsString()
    AUTH_REFRESH_SECRET: string;

    @IsString()
    AUTH_REFRESH_TOKEN_EXPIRES_IN: string;

    @IsString()
    SIGNATURE_TEXT: string;

    @IsInt()
    OTP_TIME_LIMIT: number;

    @IsString()
    URL_WEB: string;

    @IsString()
    URL_API: string;
}

export default registerAs('auth', () => {
    validateConfig(process.env, Validator);

    return {
        secret: process.env.AUTH_JWT_SECRET,
        expires: process.env.AUTH_JWT_TOKEN_EXPIRES_IN,
        refreshSecret: process.env.AUTH_REFRESH_SECRET,
        refreshExpires: process.env.AUTH_REFRESH_TOKEN_EXPIRES_IN,
        otpTimeLimit: process.env.OTP_TIME_LIMIT ? parseInt(process.env.OTP_TIME_LIMIT, 10) : 120000,
        signatureMessage: process.env.SIGNATURE_TEXT,
        urlWeb: process.env.URL_WEB,
        urlApi: process.env.URL_API,
    };
});
