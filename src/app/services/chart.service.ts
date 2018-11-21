import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  private _loginUrl = 'http://localhost:8080/api/meals/diagram/';

  constructor(private _httpClient: HttpClient) { }

  public getDiagramData(requestBody) {
    this._httpClient.post<HttpResponse<Object>>(this._loginUrl, requestBody).toPromise()
      .then(
        (resp) => {
          console.log(resp);
        },
        (resp) => {
          console.log(resp);
        }
      );
  }
}
