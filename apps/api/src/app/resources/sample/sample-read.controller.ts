import { Response } from 'express';
import { Observable } from 'rxjs';
import { FindManyOptions } from 'typeorm';

import { IReadController } from '@monorepo/common';
import {
  Controller,
  NotImplementedException,
} from '@nestjs/common';

import { Sample } from './entities';

@Controller()
export class SampleReadController
  implements IReadController<Sample, FindManyOptions, Response>
{
  streamAll(
    query: FindManyOptions<any>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new NotImplementedException('streamAll');
  }
  steramOne(
    query: FindManyOptions<any>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new NotImplementedException('steramOne');
  }
  findAll(
    query: FindManyOptions<any>
  ): Promise<Sample[]> | Observable<Sample[]> {
    throw new NotImplementedException('findAll');
  }
  findOne(query: FindManyOptions<any>): Promise<Sample> | Observable<Sample> {
    throw new NotImplementedException();
  }
}
