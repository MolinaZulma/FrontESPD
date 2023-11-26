import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListJarDTO } from 'src/app/application/DTO/jarFormat/IListJarDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class JardFormatQueryService extends BaseHttpClient {
  constructor(http: HttpClient) {super(http)}

  public getListJardFormat(): Observable<ISerialize<IListJarDTO>> {
    return super.get(this.endPoints.JarFormatForm());
  }
}
