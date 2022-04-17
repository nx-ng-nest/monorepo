import { IWriteController } from '../controller';

export interface IWriteDataService<
  CreateDTO = unknown,
  UpdateDTO = unknown,
  DeleteDTO = unknown,
  CreateResponse = unknown,
  UpdateResponse = unknown,
  DeleteResponse = unknown
> extends IWriteController<
    CreateDTO,
    UpdateDTO,
    DeleteDTO,
    CreateResponse,
    UpdateResponse,
    DeleteResponse
  > {}
