import { IActivityLogsForm } from 'src/app/domain/models/IActivityLogsForm.model';

export interface ICreateActivityDTO
  extends Pick<
    IActivityLogsForm,
    'typeActivity' | 'observations' | 'nationalIdentificationNumber' | 'idPlant'
  > {}
