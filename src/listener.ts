import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {

      urls: ['amqps://npqqsdqq:H5K1iSVDMIIN31x4bjFrOx6s-I6JNm9e@whale.rmq.cloudamqp.com/npqqsdqq'],
      queue: 'tinda_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen().then(()=> {
    console.log("microservice is listening")
  })
}
bootstrap();
