import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  
  private _requestUrl = 'http://localhost:8080/api/';

  constructor(private _httpClient: HttpClient) { }

  public getDiagramData(requestBody){
    return this._httpClient.get<any>(this._requestUrl + 'meals/diagram/' + requestBody.userName + '/' + requestBody.date);
  }

  public getAvailableMeals() {
    return this._httpClient.get<any>(this._requestUrl + 'meals');
  }

  public addNewMeal(requestBody, username) {
    console.log(requestBody);
    return this._httpClient.post<any>(this._requestUrl + 'logs/' + username, requestBody);
  }

  public getMealsOfUser(id: number) {
    return this._httpClient.get<any>(this._requestUrl + 'logs/' + id);
  }

  public getMealsOfUserByDate(username: string, date) {
    return this._httpClient.get<any>(this._requestUrl + 'logs/' + username + '/' + date);
  }

}
