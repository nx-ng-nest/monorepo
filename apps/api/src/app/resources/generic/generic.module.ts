import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Generic } from './entities';
import {
  GenericReadController,
  GenericWriteController,
} from './generic.controller';
import {
  GenericReadService,
  GenericWriteService,
} from './generic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Generic])],
  controllers: [GenericReadController, GenericWriteController],
  providers: [GenericWriteService, GenericReadService],
})
export class GenericModule {}
