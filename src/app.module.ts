import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import config from './config/keys';
import { APP_FILTER } from '@nestjs/core';
import {HttpExceptionFilter} from './filters/error';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UsersModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }],
})
export class AppModule {}
