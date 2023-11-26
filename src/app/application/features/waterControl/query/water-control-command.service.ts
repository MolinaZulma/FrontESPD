import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListWaterControlDTO } from 'src/app/application/DTO/waterControlForm/IListWaterControlDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root'
})
export class WaterControlCommandService extends BaseHttpClient {
  constructor(http: HttpClient) { super(http) }

  public getListWaterControlCommandService(): Observable<ISerialize<IListWaterControlDTO>> {
    return super.get(this.endPoints.WaterControlForm())
  }

}
