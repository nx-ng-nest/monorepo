import { Observable } from 'rxjs';

export interface IReadController<
  EntityReturnType = unknown,
  QueryOptions = unknown,
  HttpResponse = unknown
> {
  /**
   * @description Steam items one by one
   * @throws NotFoundException 404
   * @returns HttpResponse 200
   * @param query
   * @param res
   */
  stream(query: QueryOptions, res: HttpResponse): Promise<void>;

  /**
   * @description Find all items by query
   * @throws NotFoundException 404
   * @returns HttpResponse 200
   * @param query
   */
  findAll(
    query: QueryOptions
  ): Promise<EntityReturnType[]> | Observable<EntityReturnType[]> | never;

  /**
   * @description Find one item by query
   * @throws NotFoundException 404
   * @returns HttpResponse 200
   * @param query
   */
  findOne(
    query: QueryOptions
  ): Promise<EntityReturnType> | Observable<EntityReturnType> | never;

  /**
   * Check the item with the value of the field exists or not!
   * @param field entity field
   * @param value entity value
   */
  existsByField(
    field: keyof EntityReturnType,
    value: any
  ): Promise<boolean | never>;
}
