import { IWriteController } from '../controller';

export interface IWriteDataService<CreateDTO = unknown, UpdateDTO = unknown>
  extends IWriteController<CreateDTO, UpdateDTO> {}
