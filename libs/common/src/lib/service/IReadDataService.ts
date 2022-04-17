import { IReadController } from '../controller';

export interface IDataService<
  Entity = unknown,
  QueryOptions = unknown,
  HttpResponse = unknown
> extends IReadController<Entity, QueryOptions, HttpResponse> {}
