import {
  IValidateDataService,
  IWriteController,
  IWriteDataService,
} from '@monorepo/common';
import {
  Body,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { FindAllOptions } from '../params';

export class WriteController<CreateDTO, UpdateDTO>
  implements IWriteController<CreateDTO, UpdateDTO>
{
  constructor(
    public service: IWriteDataService<CreateDTO, UpdateDTO>,
    public validationService: IValidateDataService<
      FindAllOptions<CreateDTO>,
      CreateDTO,
      UpdateDTO
    >
  ) {}

  @Post()
  async save(item: CreateDTO): Promise<void> {
    const validated = await this.validationService.validateCreateDTO(item);
    await this.service.save(validated);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() item: UpdateDTO
  ): Promise<void> {
    const validated = await this.validationService.validateUpdateDTO(item);
    await this.service.update(id, validated);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
