import { IReadController } from '../controller';

export interface IReadDataService<
  Entity = unknown,
  QueryOptions = unknown,
  HttpResponse = unknown
> extends IReadController<Entity, QueryOptions, HttpResponse> {}
