/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import {
  NestApplication,
  NestFactory,
} from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';

const APP_VERSION = process.env.APP_VERSION || '0.0.1';
const PORT = process.env.PORT || 3333;
const GLOBAL_PREFIX = 'api';

function configureSwagger(app: NestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Database Api')
    .setVersion(APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(PORT);

  logger.log(
    `🚀 Application is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`
  );
}

bootstrap();
