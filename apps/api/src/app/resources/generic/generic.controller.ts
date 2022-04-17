import {
  ReadController,
  ValidateDataService,
  WriteController,
} from '@monorepo/api-core';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  GenericCreateDTO,
  GenericUpdateDTO,
} from './dtos';
import { Generic } from './entities';
import {
  GenericReadService,
  GenericWriteService,
} from './generic.service';

const validationService = new ValidateDataService(
  GenericCreateDTO,
  GenericUpdateDTO
);

@ApiTags("Generic")
@Controller('generics')
export class GenericReadController extends ReadController<Generic> {
  constructor(readDataService: GenericReadService) {
    super(readDataService);
  }
}

@ApiTags("Generic")
@Controller('generic')
export class GenericWriteController extends WriteController<
  GenericCreateDTO,
  GenericUpdateDTO
> {
  constructor(writeDataService: GenericWriteService) {
    super(writeDataService, validationService);
  }
}
