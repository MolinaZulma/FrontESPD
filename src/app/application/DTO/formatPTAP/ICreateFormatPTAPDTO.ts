import { FormatPTAP } from 'src/app/domain/models/IFormatPTAP.model';

export interface ICreateFormatPTAP
  extends Pick<
    FormatPTAP,
    | 'typeWater'
    | 'temperature'
    | 'alkalinityPh'
    | 'alkalineChlorine'
    | 'alkalineInitialReading'
    | 'alkalineFinalReading'
    | 'alkalineTotal'
    | 'alkaline'
    | 'chlorineGas'
    | 'particlesPerMillion'
    | 'nationalIdentificationNumber'
    | 'idPlant'
  > {}
