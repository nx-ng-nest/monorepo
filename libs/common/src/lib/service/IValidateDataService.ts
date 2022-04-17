export interface IValidateDataService<QueryDTO, CreateDTO, UpdateDTO> {
  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateQueryDTO(dto: QueryDTO): Promise<never | QueryDTO>;

  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateCreateDTO(dto: CreateDTO): Promise<never | CreateDTO>;

  /**
   * @description Check the DTO is valid or not.
   * @throws UnprocessableEntityException
   * @param dto
   */
  validateUpdateDTO(dto: UpdateDTO): Promise<never | UpdateDTO>;
}
