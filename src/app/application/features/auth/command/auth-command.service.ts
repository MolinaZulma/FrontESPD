import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthenticateDTO } from 'src/app/application/DTO/auth/IAuthenticateDTO';
import { IJwtDTO } from 'src/app/application/DTO/auth/IJwtDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';
import { ICreateTokenDTO, IListTokenDTO } from 'src/app/presentation/authenticate/auth-options/auth-options.component';

@Injectable({
  providedIn: 'root',
})
export class AuthCommandService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public authenticate(auth: ICreateTokenDTO): Observable<IListTokenDTO> {
    return super.post(auth, this.endPoints.authenticate());
  }
}
