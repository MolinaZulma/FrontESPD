import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateActivityDTO } from 'src/app/application/DTO/activityLogs/ICreateActivityDTO';
import { IListActivityDTO } from 'src/app/application/DTO/activityLogs/IListActivityDTO';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class ActivityRegisterService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public createActivity(CreateActivityDTO: ICreateActivityDTO): Observable<IListActivityDTO> {
    console.log(CreateActivityDTO);
    
    debugger
    return super.post(CreateActivityDTO, this.endPoints.ActivityLogsForm());
  }
}
