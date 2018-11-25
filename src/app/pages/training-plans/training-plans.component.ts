import { Component, OnInit } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  private _subs;
  public allTrainingPlans = [];
  public allActivities = [];
  public submitted: boolean = true;
  public selectedTraining;
  public selectedActivity;


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
    {
      "id": 5,
      "name": "Lofasz 5",
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


  onSubmit() { 
    this.submitted = true; 
    this.onCreateNewPlan();
  }

  ngOnInit() {
    this.getAllTrainingPlans();
    this.getAllTrainingActivities();
  }

  public getAllTrainingPlans() {
    this._traningPlansService.getTrainingPlans()
      .pipe(first()).subscribe(
        plans => {
        this.allTrainingPlans = plans;
      });
  }

  public getAllTrainingActivities() {
    this._traningPlansService.getTrainingActivities()
      .pipe(first()).subscribe(
        activities => {
          this.allActivities = activities;
        });
  }

  public onSelectTrainingPlan(item) {
    this.selectedTraining = item;
    this._router.navigate(['training', item.id]);
  }

  public onSelectActivity(item) {
    this.selectedActivity = item;
  }

  public onCreateNewPlan() {
    let requestBody = {
      "activities": [
        {
          "countable": false,
          "id": this.getSelectedTrainingId(),
          "quantity": this.form.count.value
        }
      ],
      "done": false,
      "id": 0,
      "name": "string",
      "user": {
        "username": "user1"
      }
    };
    this._traningPlansService.createTrainingPlan(requestBody)
      .pipe(first()).subscribe(
        response => {
          console.log(response);
        }
      );
  }

  public onUpdateTrainingPlan() {
    let id = "1";
    let requestBody = {

    };
    this._traningPlansService.updateTrainingPlan(id, requestBody)
      .pipe(first()).subscribe(
        response => {
          console.log(response);
        }
      );

  }

  public getSelectedTrainingId() {
    let id = 0;
    this.allActivities.forEach(element => {
      if (element.name === this.form.type.value) {
        id = element.id;
        console.log("Element found: " + id);
      }
    });
    return { "id": id };
  }

  public onGetTrainingPlanOfUser() {
    let username = "user1";
    this._traningPlansService.getTrainingPlanByUsername(username)
      .pipe(first()).subscribe(
        plan => {
          console.log(plan);
        }
      );

  }
}
