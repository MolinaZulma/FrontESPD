export interface IListActivityDTO {
  data: Data;
  message: null;
  succeed: boolean;
  errors: null;
  statusCode: number;
}

export interface Data {
  id: number;
  name: string;
  typePlant: string;
  direction: string;
  description: string;
}
