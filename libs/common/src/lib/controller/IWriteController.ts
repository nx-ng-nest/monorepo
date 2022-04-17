import { Observable } from 'rxjs';

export interface IWriteController<
  CreateDTO = unknown,
  UpdateDTO = unknown,
  DeleteDTO = unknown,
  CreateResponse = unknown,
  UpdateResponse = unknown,
  DeleteResponse = unknown
> {
  /**
   * @description Create new entity in database
   * @param item
   */
  save(item: CreateDTO): Promise<CreateResponse> | Observable<CreateResponse>;

  /**
   * @description Update the entity in database
   * @param item
   */
  update(item: UpdateDTO): Promise<UpdateResponse> | Observable<UpdateResponse>;

  /**
   * @description Delete the enity in database
   * @param item
   */
  delete(item: DeleteDTO): Promise<DeleteResponse> | Observable<DeleteResponse>;
}
