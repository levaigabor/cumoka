import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  constructor(private _client: HttpClient) { }

  public getTrainingPlans(): Observable<ITrainingDescriptor[]> {
    return this._client.get<ITrainingDescriptor[]>("");
  }
}
