import { IAccountModel } from 'src/app/domain/models/IAccount.model';

export interface IAuthenticateDTO
  extends Pick<IAccountModel, 'email' | 'password'> {}
