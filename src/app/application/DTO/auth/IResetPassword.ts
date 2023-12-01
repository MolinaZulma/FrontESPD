import { IAccountModel } from 'src/app/domain/models/IAccount.model';

export interface IResetPassword extends Pick<IAccountModel, 'email'> {}
