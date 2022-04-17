import { ICommonFields } from 'libs/common/src/lib/entities/ICommonFields';
import {
  DeepPartial,
  Repository,
} from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import { IWriteDataService } from '@monorepo/common';

export abstract class WriteDataService<
  Entity extends ICommonFields,
  CreateDTO extends DeepPartial<Entity>,
  UpdateDTO extends QueryDeepPartialEntity<Entity>
> implements IWriteDataService<CreateDTO, UpdateDTO>
{
  constructor(public repository: Repository<Entity>) {}

  async save(item: CreateDTO): Promise<void> {
    await this.repository.save(item);
  }
  async update(id: string, item: UpdateDTO): Promise<void> {
    await this.repository.update(id, item);
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
