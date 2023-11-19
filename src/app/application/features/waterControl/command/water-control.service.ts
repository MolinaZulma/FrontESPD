import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateWaterControlDTO } from 'src/app/application/DTO/waterControlForm/ICreateWaterControlDTO';
import { IListWaterControlDTO } from 'src/app/application/DTO/waterControlForm/IListWaterControlDTO';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class WaterControlService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public CreateWaterControlDTO(CreateWaterControlDTO: ICreateWaterControlDTO): Observable<IListWaterControlDTO> {
    return super.post(CreateWaterControlDTO, this.endPoints.WaterControlForm());
  }
}
