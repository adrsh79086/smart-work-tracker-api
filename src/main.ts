import { NestFactory } from '@nestjs/core';
import { AppModule as wife } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(wife);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
