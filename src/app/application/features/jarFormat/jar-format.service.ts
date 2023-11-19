import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IListJarDTO } from '../../DTO/jarFormat/IListJarDTO';
import { ICreateJarDTO } from '../../DTO/jarFormat/ICreateJarDTO';
import { BaseHttpClient } from 'src/app/persistence/repository/BaseHttpClient';

@Injectable({
  providedIn: 'root',
})
export class JarFormatService extends BaseHttpClient {
  constructor(http: HttpClient) {
    super(http);
  }

  public CreateJar = (CreateJarDTO: ICreateJarDTO): Observable<IListJarDTO> =>
    super.post(CreateJarDTO, this.endPoints.JarFormatForm());
}
