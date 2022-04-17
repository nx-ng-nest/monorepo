import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  Generic,
  GenericModule,
} from './resources/generic';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/data.sqlite',
      entities: [Generic],
      synchronize: true,
      dropSchema: true,
    }),
    GenericModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
