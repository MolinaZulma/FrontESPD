import { IWaterControlForm } from 'src/app/domain/models/IWaterControlForm.model';

export interface ICreateWaterControlDTO
  extends Pick<
    IWaterControlForm,
    | 'totalHours'
    | 'amountWaterCaptured'
    | 'amountWaterSupplied'
    | 'aluminumSulfate'
    | 'sodiumHypochlorite'
    | 'chlorineGas'
    | 'particlesPerMillion'
    | 'nationalIdentificationNumber'
    | 'idPlant'
  > {}
