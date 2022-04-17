import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

import { ISample } from '@monorepo/common';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class SampleCreateDTO implements ISample {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  @Expose()
  name: string;
}
