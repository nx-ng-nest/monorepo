import { Response } from 'express';
import { Observable } from 'rxjs';

import {
  IDataService,
  IReadController,
} from '@monorepo/common';

import { FindAllOptions } from '../params';

export abstract class ReadController<
  Entity,
  CreateDTO,
  UpdateDTO,
  DeleteDTO,
  CreateResponse,
  UpdateResponse,
  DeleteResponse
> implements IReadController<Entity, FindAllOptions<Entity>, Response>
{
  constructor(
    public service: IDataService<
      Entity,
      FindAllOptions<Entity>,
      CreateDTO,
      UpdateDTO,
      DeleteDTO,
      CreateResponse,
      UpdateResponse,
      DeleteResponse,
      Response
    >
  ) {}

  streamAll(
    query: FindAllOptions<Entity>,
    res: Response<any, Record<string, any>>
  ): void {
    this.service.streamAll(query, res);
  }

  steramOne(
    query: FindAllOptions<Entity>,
    res: Response<any, Record<string, any>>
  ): void {
    this.service.steramOne(query, res);
  }

  findAll(
    query: FindAllOptions<Entity>
  ): Promise<Entity[]> | Observable<Entity[]> {
    return this.service.findAll(query);
  }

  findOne(query: FindAllOptions<Entity>): Promise<Entity> | Observable<Entity> {
    return this.service.findOne(query);
  }
}
