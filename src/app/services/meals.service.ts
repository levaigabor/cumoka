import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  
  private _diagramUrl = 'http://localhost:8080/api/meals/diagram/';

  constructor(private _httpClient: HttpClient) { }

  public getDiagramData(requestBody): Observable<any> {
    return this._httpClient.get<any>(this._diagramUrl, requestBody);
  }
}
