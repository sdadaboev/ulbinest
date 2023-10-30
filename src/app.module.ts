import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TindaTokenModule } from './tinda-token/tinda-token.module';

@Module({
  imports: [
    TindaTokenModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './resourses/tinda.properties.json'
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
