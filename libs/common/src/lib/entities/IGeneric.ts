import { ICommonFields } from './ICommonFields';

/**
 * @description Generic entity interface
 */
export interface IGeneric extends ICommonFields {
  modelName: string;
  value: Record<string, any>;
}

export const SAMPLE_SINGULAR_NAME: Readonly<string> = 'sample';
export const SAMPLE_PLURAL_NAME: Readonly<string> = 'samples';
