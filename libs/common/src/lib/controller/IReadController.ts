import { Observable } from 'rxjs';

export interface IReadController<
  EntityReturnType = unknown,
  QueryOptions = unknown,
  HttpResponse = unknown
> {
  /**
   * @description Steam items one by one
   * @param query
   * @param res
   */
  streamAll(query: QueryOptions, res: HttpResponse): void;

  /**
   * @description Stream item * by *
   * @param query
   * @param res
   */
  steramOne(query: QueryOptions, res: HttpResponse): void;

  findAll(
    query: QueryOptions
  ): Promise<EntityReturnType[]> | Observable<EntityReturnType[]>;

  findOne(
    query: QueryOptions
  ): Promise<EntityReturnType> | Observable<EntityReturnType>;
}
