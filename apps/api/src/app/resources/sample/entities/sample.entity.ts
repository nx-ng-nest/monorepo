import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ISample } from '@monorepo/common';

@Entity()
export class Sample implements ISample {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text', unique: true })
  name: string;
}

