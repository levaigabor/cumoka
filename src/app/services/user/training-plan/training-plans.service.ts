import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

export interface ITrainingDescriptor {
  trainingId: number;
  name: string;
  date: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainingPlansService {

  private _trainingsUrl = 'http://localhost:8080/api/activityplans';
  private _trainingActivitiesUrl = 'http://localhost:8080/api/activities';
  private _specificTrainingActivitiesUrl = 'http://localhost:8080/api/activities/';


  constructor(private _httpClient: HttpClient) { }

  public getTrainingPlans(): Observable<any> {
    return this._httpClient.get<any>(this._trainingsUrl);
  }

  public getTrainingActivities(): Observable<any> {
    return this._httpClient.get<any>(this._trainingActivitiesUrl);
  }

  public getSpecificTraining(id): Observable<any> {
    return this._httpClient.get<any>(this._specificTrainingActivitiesUrl + id);
  }

  public createTrainingPlan(requestBody) {
    return this._httpClient.post<any>(this._trainingsUrl, requestBody);
  }

  public updateTrainingPlan(id, requestBody) {
    return this._httpClient.put<any>(this._trainingsUrl + '/' + id, requestBody);
  }

  public getTrainingPlanByUsername(username): Observable<any> {
    return this._httpClient.get<any>(this._trainingsUrl + '/user/' + username);
  }
}
