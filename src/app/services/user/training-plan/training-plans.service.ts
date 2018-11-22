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

  private _trainingsUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) { }

  public getTrainingPlans(): Observable<any> {
    return this._httpClient.get<any>(this._trainingsUrl);
  }
}
