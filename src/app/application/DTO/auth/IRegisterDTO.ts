import { IAccountModel } from 'src/app/domain/models/IAccount.model';

export interface IRegisterDTO
  extends Pick<
    IAccountModel,
    | 'nationalIdentificationNumber'
    | 'email'
    | 'userName'
    | 'password'
    | 'confirmPassword'
    | 'fullName'
    | 'phoneNumber'
    | 'nameRole'
  > {}
