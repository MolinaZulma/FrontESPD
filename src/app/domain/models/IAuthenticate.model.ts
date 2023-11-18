import { IAccountModel } from './IAccount.model';

export interface IAuthenticate
  extends Pick<
    IAccountModel,
    | 'id'
    | 'nationalIdentificationNumber'
    | 'userName'
    | 'email'
    | 'isVerified'
    | 'password'
    | 'confirmPassword'
    | 'roles'
  > {
  jwToken: string;
}
