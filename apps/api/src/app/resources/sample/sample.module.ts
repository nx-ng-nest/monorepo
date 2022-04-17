import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sample } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
})
export class SampleModule {}
