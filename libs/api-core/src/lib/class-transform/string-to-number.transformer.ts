import { Transform } from 'class-transformer';

export function StringToNumberTransformer() {
  return Transform(({ value }) => value && parseInt(value));
}
