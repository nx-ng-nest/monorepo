import {
  Exclude,
  Expose,
} from 'class-transformer';
import { FindManyOptions } from 'typeorm';

import { StringToNumberTransformer } from '../class-transform';

@Exclude()
export class FindAllOptions<T> implements FindManyOptions<T> {
  @Expose()
  @StringToNumberTransformer()
  take?: number;

  @Expose()
  @StringToNumberTransformer()
  skip?: number;

  @Expose()
  select?: (keyof T)[];

  @Expose()
  withDeleted?: boolean;
}
