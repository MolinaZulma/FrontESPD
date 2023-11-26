import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class DamageQueryService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public getListDamageReport(): Observable<ISerialize<IListDamageDTO>> {
    return super.get(this.endPoints.DamageReport());
  }
}
