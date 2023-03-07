import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApiDocs } from './common/api-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  setupApiDocs(app);
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
