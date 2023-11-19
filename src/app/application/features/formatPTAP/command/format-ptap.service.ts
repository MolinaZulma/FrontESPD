import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';
import { IListFormatPTAPDTO } from 'src/app/application/DTO/formatPTAP/IListFormatPTAPDTO';
import { ICreateFormatPTAP } from 'src/app/application/DTO/formatPTAP/ICreateFormatPTAPDTO';

@Injectable({
  providedIn: 'root',
})
export class FormatPTAPService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public CreateFormatPTAP(CreateFormatPTAP: ICreateFormatPTAP): Observable<IListFormatPTAPDTO> {
    return super.post(CreateFormatPTAP, this.endPoints.FormatPTAPForm());
  }
}
