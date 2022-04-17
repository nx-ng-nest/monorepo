import { Response } from 'express';
import { Observable } from 'rxjs';

import {
  IReadController,
  IReadDataService,
} from '@monorepo/common';
import { Get } from '@nestjs/common';

import { FindAllOptions } from '../params';

export class ReadController<Entity>
  implements IReadController<Entity, FindAllOptions<Entity>, Response>
{
  constructor(
    public service: IReadDataService<Entity, FindAllOptions<Entity>, Response>
  ) {}
  async existsByField(field: keyof Entity, value: any): Promise<boolean> {
    return await this.service.existsByField(field, value);
  }

  @Get('stream')
  async stream(
    query: FindAllOptions<Entity>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    await this.service.stream(query, res);
  }

  @Get()
  findAll(
    query: FindAllOptions<Entity>
  ): Promise<Entity[]> | Observable<Entity[]> {
    return this.service.findAll(query);
  }

  @Get('one')
  findOne(query: FindAllOptions<Entity>): Promise<Entity> | Observable<Entity> {
    return this.service.findOne(query);
  }
}
