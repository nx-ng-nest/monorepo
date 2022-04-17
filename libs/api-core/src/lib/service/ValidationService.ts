import {
  ClassConstructor,
  plainToInstance,
} from 'class-transformer';
import { validate } from 'class-validator';

import { IValidateDataService } from '@monorepo/common';
import { UnprocessableEntityException } from '@nestjs/common';

import { FindAllOptions } from '../params';

export class ValidateDataService<Entity, CreateDTO, UpdateDTO>
  implements IValidateDataService<FindAllOptions<Entity>, CreateDTO, UpdateDTO>
{
  constructor(
    public createDTO: ClassConstructor<CreateDTO>,
    public updateDTO: ClassConstructor<UpdateDTO>
  ) {}

  async validateCreateDTO(dto: CreateDTO): Promise<never | CreateDTO> {
    const transformed = plainToInstance<any, CreateDTO>(this.createDTO, dto);

    console.info(`Transformed : ${transformed}`);

    const errors = await validate(transformed);

    if (errors && errors.length > 0) {
      throw new UnprocessableEntityException({ errors });
    }
    return transformed;
  }

  async validateQueryDTO(
    dto: FindAllOptions<Entity>
  ): Promise<never | FindAllOptions<Entity>> {
    const transformed = plainToInstance<
      FindAllOptions<Entity>,
      FindAllOptions<Entity>
    >(FindAllOptions, dto);
    console.info(`Transformed : ${transformed}`);

    const errors = await validate(transformed);
    if (errors && errors.length > 0) {
      throw new UnprocessableEntityException({ errors });
    }
    return transformed;
  }

  async validateUpdateDTO(dto: UpdateDTO): Promise<never | UpdateDTO> {
    const transformed = plainToInstance<any, UpdateDTO>(
      this.updateDTO,
      dto,
      {}
    );
    console.info(`Transformed : ${transformed}`);
    const errors = await validate(transformed);
    if (errors && errors.length > 0) {
      throw new UnprocessableEntityException({ errors });
    }
    return transformed;
  }
}
