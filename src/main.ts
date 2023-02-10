import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaService } from './shared/services/prisma.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));
  app.use('/', express.static(join(process.cwd(), 'client', 'build'))); // <-- Add this istead of ServeStaticModule in AppModule becouse it did't work

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(8000);
}
bootstrap();
