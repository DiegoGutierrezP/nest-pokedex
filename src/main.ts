import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');//prefix for controllers

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,//transform dtos like @Query 
    transformOptions: {
      enableImplicitConversion: true
    }
  }))

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`)
}
bootstrap();
