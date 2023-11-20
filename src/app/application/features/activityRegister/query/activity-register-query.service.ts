import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListActivityDTO } from 'src/app/application/DTO/activityLogs/IListActivityDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root'
})
export class ActivityRegisterQueryService extends BaseHttpClient {
  constructor(http: HttpClient) { super(http) }

  public getListActivityRegister(): Observable<ISerialize<IListActivityDTO>> {
    return super.get(this.endPoints.ActivityLogsForm())
  }

}
