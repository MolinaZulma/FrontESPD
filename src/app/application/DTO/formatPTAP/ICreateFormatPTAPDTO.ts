import { FormatPTAP } from 'src/app/domain/models/IFormatPTAP.model';

export interface ICreateFormatPTAP
  extends Pick<
    FormatPTAP,
    | 'TypeWater'
    | 'Temperature'
    | 'AlkalinityPh'
    | 'AlkalineChlorine'
    | 'AlkalineInitialReading'
    | 'AlkalineFinalReading'
    | 'AlkalineTotal'
    | 'Alkaline'
    | 'ChlorineGas'
    | 'ParticlesPerMillion'
    | 'NationalIdentificationNumber'
    | 'IdPlant'
  > {}