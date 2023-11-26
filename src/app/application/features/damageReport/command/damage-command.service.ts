import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { IDamageReport } from 'src/app/domain/models/IDamageReport.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class DamageCommandService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public postDamage(damage: IDamageReport): Observable<IListDamageDTO> {
    return super.post(damage, this.endPoints.DamageReport());
  }
}
