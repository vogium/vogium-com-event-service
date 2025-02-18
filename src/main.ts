import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '10mb' })); // 10MB örnek olarak

  await app.listen(process.env.PORT ?? 3011);
}
bootstrap();
