import { Repository } from 'typeorm';

import {
  ReadDataService,
  WriteDataService,
} from '@monorepo/api-core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  GenericCreateDTO,
  GenericUpdateDTO,
} from './dtos';
import { Generic } from './entities';

@Injectable()
export class GenericReadService extends ReadDataService<Generic> {
  constructor(@InjectRepository(Generic) repo: Repository<Generic>) {
    super(repo);
  }
}

@Injectable()
export class GenericWriteService extends WriteDataService<
  Generic,
  GenericCreateDTO,
  GenericUpdateDTO
> {
  constructor(@InjectRepository(Generic) repo: Repository<Generic>) {
    super(repo);
  }
}
