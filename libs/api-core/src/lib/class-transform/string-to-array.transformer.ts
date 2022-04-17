import { Transform } from 'class-transformer';

import { UnprocessableEntityException } from '@nestjs/common';

import { SystemLogger } from '../system-logger';

export function StringToArrayTransformer() {
  return Transform(({ value }) => {
    if (value && typeof value == 'string') {
      return value.split(',');
    }
    SystemLogger.error(`Value is null or not a type of string! '${value}'`);
    throw new UnprocessableEntityException('');
  });
}
