import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  
  private _diagramUrl = 'http://localhost:8080/api/meals/diagram/';
  private _getMealsUrl = 'http://localhost:8080/api/meals';
  private _addMealUrl = 'http://localhost:8080/api/logs';

  constructor(private _httpClient: HttpClient) { }

  public getDiagramData(requestBody){
    return this._httpClient.get<any>(this._diagramUrl + requestBody.userName + '/' + requestBody.date);
  }

  public getAvailableMeals() {
    return this._httpClient.get<any>(this._getMealsUrl);
  }

  public addNewMeal(requestBody) {
    console.log(requestBody);
    return this._httpClient.post<any>(this._addMealUrl + '/user1', requestBody);
  }

}
