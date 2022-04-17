import { Observable } from 'rxjs';

export interface IValidateDataService<QueryDTO, CreateDTO, UpdateDTO, DeleteDTO> {
  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateQueryDTO(
    dto: QueryDTO
  ): Promise<boolean> | Observable<boolean> | boolean | never;

  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateCreateDTO(
    dto: CreateDTO
  ): Promise<boolean> | Observable<boolean> | boolean | never;

  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateUpdateDTO(
    dto: UpdateDTO
  ): Promise<boolean> | Observable<boolean> | boolean | never;

  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateDeleteDTO(
    dto: DeleteDTO
  ): Promise<boolean> | Observable<boolean> | boolean | never;

  /**
   * Check the item with the value of the field exists or not!
   * @param field entity field
   * @param value entity value
   */
  existsByField<V = unknown>(
    field: string,
    value: V
  ): Promise<boolean> | Observable<boolean> | boolean | never;
}
