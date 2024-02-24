require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { debugLog, logger } from './shared/logger';
import * as fs from 'fs';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import { AppWorkerModule } from './app-worker.module';

import * as express from 'express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  let app = null;

  if (
    process.env.NODE_ENV === 'dev-worker' ||
    process.env.NODE_ENV === 'prod-worker'
  ) {
    app = await NestFactory.create(AppWorkerModule);
    app.use(logger);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    debugLog(`Worker is running`);
  } else {
    const server = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    const options = new DocumentBuilder()
      .setTitle('Penguin API - A Project of Xteam')
      .setDescription('The Penguin API description')
      .setVersion('1.0')
      .addBearerAuth(
        {
          description: 'Bearer *schedule*',
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
        'JWT',
      )
      .addSecurityRequirements('JWT')
      .build();

    if (process.env.NODE_ENV !== 'prod-api') {
      const document = SwaggerModule.createDocument(app, options);
      writeSwaggerJson(`${process.cwd()}`, document);
      SwaggerModule.setup('docs', app, document);
    }

    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.use(logger);
    app.enableCors({
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      origin: true,
    });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.use(cookieParser(process.env.SECRET_SET_COOKIE || 'secret', {}));
    app.use('/ipfs', express.static('ipfs'), function (req, res) {
      res.status(404);
      res.json({ error: { code: 404 } });
    });
    app.enableVersioning({
      type: VersioningType.URI,
    });
    await app.init();
    http.createServer(server).listen(process.env.APP_PORT || 3001);
    debugLog(`Application is running on: ${process.env.APP_PORT || 3001}`);
  }
}

bootstrap().then(() => {
  process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason);
  });
});

export const writeSwaggerJson = (path: string, document: any) => {
  fs.writeFileSync(`${path}/swagger.json`, JSON.stringify(document, null, 2), {
    encoding: 'utf8',
  });
};
