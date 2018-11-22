import { Component, OnInit } from '@angular/core';
import {TrainingPlansService} from '../../services/user/training-plan/training-plans.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {first, map} from 'rxjs/operators';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  private _subs;
  public allTranings = [];
  public submitted: boolean;
  public selectedTraining;

  public testJson = [
    {
      "id": 1,
      "name": "Lofasz 1",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "activities": [
        {
          "name": "Pullup",
          "date": "2018-08-15",
          "count": 20
        },
        {
          "name": "Low Row",
          "date": "2018-08-16",
          "count": 20
        },
        {
          "name": "Pullup",
          "date": "2018-08-17",
          "count": 20
        },
        {
          "name": "Low Row",
          "date": "2018-08-18",
          "count": 20
        },
      ]
    },
    {
      "id": 2,
      "name": "Lofasz 2",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "activities": [
        {
          "name": "Pushup",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Deadlift",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Pushup",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Deadlift",
          "date": "2018-11-18",
          "count": 20
        }
      ]
    },
    {
      "id": 3,
      "name": "Lofasz 3",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "activities": [
        {
          "name": "Pullup",
          "date": "2018-08-15",
          "count": 20
        },
        {
          "name": "Low Row",
          "date": "2018-08-16",
          "count": 20
        },
        {
          "name": "Pullup",
          "date": "2018-08-17",
          "count": 20
        },
        {
          "name": "Low Row",
          "date": "2018-08-18",
          "count": 20
        },
      ]
    },
    {
      "id": 4,
      "name": "Lofasz 4",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "activities": [
        {
          "name": "Pushup",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Deadlift",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Pushup",
          "date": "2018-11-18",
          "count": 20
        },
        {
          "name": "Deadlift",
          "date": "2018-11-18",
          "count": 20
        }
      ]
    },
  ];

  constructor(private _traningPlansService: TrainingPlansService,
              private _httpClient: HttpClient, private _router: Router) { }


  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  public getAllTrainingPlans() {
    this._traningPlansService.getTrainingPlans()
      .pipe(
        first()).subscribe(trainings => {
          this.allTranings = trainings;
        });
    // this.allTranings = this.testJson
  }

  public onSelect(item) {
    this.selectedTraining = item;
  }

}
