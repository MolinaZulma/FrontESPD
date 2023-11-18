import { IAccountModel } from 'src/app/domain/models/IAccount.model';
import { IAuthenticate } from 'src/app/domain/models/IAuthenticate.model';

export interface IJwtDTO
  extends Pick<
      IAccountModel,
      | 'id'
      | 'nationalIdentificationNumber'
      | 'userName'
      | 'email'
      | 'roles'
      | 'isVerified'
    >,
    Pick<IAuthenticate, 'jwToken'> {}
