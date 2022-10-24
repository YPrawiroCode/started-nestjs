/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const PORT = process.env.PORT || 3001;

  await app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT}`,
    );
  });
}
bootstrap();
