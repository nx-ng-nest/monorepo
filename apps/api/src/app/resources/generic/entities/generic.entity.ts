import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '@monorepo/api-core';
import { IGeneric } from '@monorepo/common';

@Entity()
export class Generic extends BaseEntity implements IGeneric {
  @Column({ type: 'text' }) modelName: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value) => value && JSON.stringify(value),
      from: (value) => value && JSON.parse(value),
    },
  })
  value: Record<string, any>;
}
