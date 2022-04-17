/**
 * @description Sample entity interface
 */
export interface ISample {
  /**
   * @description Name of the sample entity
   * @name name
   * @type text
   * @validation required = true
   * @validation  minlength = 3
   * @validation  maxlength = 20
   */
  name: string;
}

export const SAMPLE_SINGULAR_NAME: Readonly<string> = 'sample';
export const SAMPLE_PLURAL_NAME: Readonly<string> = 'samples';
