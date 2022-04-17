import { Response } from 'express';
import { ICommonFields } from 'libs/common/src/lib/entities/ICommonFields';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { IReadDataService } from '@monorepo/common';
import { NotFoundException } from '@nestjs/common';

import { FindAllOptions } from '../params';

export abstract class ReadDataService<Entity extends ICommonFields>
  implements IReadDataService<Entity, FindAllOptions<Entity>, Response>
{
  constructor(public repository: Repository<Entity>) {}

  async stream(
    query: FindAllOptions<Entity>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const founds = await this.repository.find(query);
    if (founds && founds.length > 0) {
      for (let item of founds) {
        res.write(JSON.stringify(item));
      }
      res.end();
    } else {
      throw new NotFoundException();
    }
  }

  findAll(
    query: FindAllOptions<Entity>
  ): Promise<Entity[]> | Observable<Entity[]> {
    return this.repository.find(query);
  }

  findOne(query: FindAllOptions<Entity>): Promise<Entity> | Observable<Entity> {
    return this.repository.findOne(query);
  }
  async existsByField(field: keyof Entity, value: any): Promise<boolean> {
    const found = await this.repository.findOne({ where: { [field]: value } });

    if (found) {
      return true;
    }
    throw new NotFoundException();
  }
}
