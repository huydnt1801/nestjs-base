import { registerAs } from '@nestjs/config';
import { IsBoolean, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import validateConfig from '../../shared/validate-config';

class Validator {
    @IsNotEmpty()
    TWITTER_CONSUMER_KEY: string;

    @IsNotEmpty()
    TWITTER_CONSUMER_SECRET: string;

    @IsNotEmpty()
    TWITTER_CALLBACK_URL: string;
}

export default registerAs('twitter', () => {
    validateConfig(process.env, Validator);

    return {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK_URL,
    };
});
