import { Injectable } from '@angular/core';
import { EndPointRepository } from './EndPoint.repository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpClient {
  protected readonly endPoints: EndPointRepository;

  constructor(protected readonly http: HttpClient) {
    this.endPoints = new EndPointRepository();
  }

  protected get<T>(endPoint: string): Observable<ISerialize<T>> {
    return this.http.get<ISerialize<T>>(endPoint);
  }

  protected post<T>(param: object, endPoint: string): Observable<T> {
    return this.http.post<T>(endPoint, param);
  }

  protected put<T>(endPoint: string, instance: object): Observable<ISerialize<T>> {
    return this.http.put<ISerialize<T>>(endPoint, instance);
  }

  protected patch<T>(param: object, endPoint: string): Observable<ISerialize<T>> {
    return this.http.patch<ISerialize<T>>(endPoint, param);
  }

  protected delete<T>(param: object, endPoint: string): Observable<ISerialize<T>> {
    return this.http.delete<ISerialize<T>>(endPoint, param);
  }
}
