export interface IWriteController<
  CreateDTO = unknown,
  UpdateDTO = unknown,
  DeleteDTO = unknown
> {
  /**
   * @description Create new entity in database
   * @throws UnprocessableEntityException
   * @returns HttpResponse 201
   * @param item
   */
  save(item: CreateDTO): Promise<void> | never;

  /**
   * @description Update the entity in database
   * @throws NotFoundException
   * @throw UnprocessableEntityException
   * @return HttpResponse 201
   * @param id
   * @param item
   */
  update(id: string, item: UpdateDTO): Promise<void> | never;

  /**
   * @description Delete the enity in database
   * @throws NotFoundException
   * @throw UnprocessableEntityException
   * @return HttpResponse 201
   * @param id
   */
  delete(id: string): Promise<void> | never;
}
