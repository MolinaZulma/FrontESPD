import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';
import { IListUsersDTO } from 'src/app/presentation/ptap/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public getAllUsers(): Observable<ISerialize<IListUsersDTO>> {
    return super.get(this.endPoints.User());
  }
}
