import { Exclude } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { Generic } from '../entities';

@Exclude()
export class GenericCreateDTO implements Generic {
  @ApiProperty({ type: 'text' }) modelName: string;
  @ApiProperty({ type: 'object' }) value: Record<string, any>;
}

export class GenericUpdateDTO extends GenericCreateDTO {}
