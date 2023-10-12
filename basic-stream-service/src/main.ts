import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       host: '0.0.0.0',
  //       port: 3000,
  //     }
  //   },
  // );
  // await app.listen();
  const app = await NestFactory.create(AppModule);
  await app.init();
  await app.listen(3000);
}
bootstrap();
