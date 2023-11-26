import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListFormatPTAPDTO } from 'src/app/application/DTO/formatPTAP/IListFormatPTAPDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class PtapFormatService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public getListPtapFormat():  Observable<ISerialize<IListFormatPTAPDTO>>  {
    return super.get(this.endPoints.FormatPTAPForm());
  }
}
