// Generated by https://quicktype.io

export interface IListJarDTO {
  data: Data;
  message: null;
  succeed: boolean;
  errors: null;
  statusCode: number;
}

export interface Data {
  id: number;
  jarConcentration: number;
  jarOptime: string;
  phJar: number;
  nationalIdentificationNumber: string;
  idPlant: number;
}