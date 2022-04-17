import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  FindConditions,
  FindManyOptions,
  ObjectLiteral,
} from 'typeorm';

import { StringToNumberTransformer } from '../class-transform';

@Exclude()
export class FindAllOptions<T> implements FindManyOptions<T> {
  @Expose()
  @StringToNumberTransformer()
  @IsOptional()
  take?: number;

  @Expose()
  @StringToNumberTransformer()
  @IsOptional()
  skip?: number;

  @Expose()
  @IsOptional()
  select?: (keyof T)[];

  @Expose()
  @IsOptional()
  withDeleted?: boolean;

  @Expose()
  @IsOptional()
  where?: string | ObjectLiteral | FindConditions<T> | FindConditions<T>[];
}
