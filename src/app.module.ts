<<<<<<< HEAD
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
=======
import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/userRoles.model";
import sequelize from "sequelize";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true
          }),
          
        UsersModule,
        RolesModule,
    ]
})
export class AppModule {}

>>>>>>> 13b865d5730ca7fbaeaeed456c430dc5de6751b0
