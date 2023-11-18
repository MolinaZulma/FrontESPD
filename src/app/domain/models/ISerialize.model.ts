export interface ISerialize<T> {
  data: T[];
  message: null | string;
  succeed: boolean;
  errors: null | string;
  statusCode: number;
}
