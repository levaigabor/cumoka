import { Component, OnInit } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  public newPlanForm: FormGroup;

  constructor(private _traningPlansService: TrainingPlansService,
    private _httpClient: HttpClient, private _router: Router,
    private _formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted = true;
    this.onCreateNewPlan();
  }

  get form() {
    return this.newPlanForm.controls;
  }

  newPlan() {

  }

  ngOnInit() {
    this.newPlanForm = this._formBuilder.group({
      name: [''],
      type: [''],
      date: [''],
      count: ['']
    });
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
          "countable": true,
          "id": this.getSelectedTrainingId(),
          "name": this.form.type.value,
          "quantity": this.form.count.value
        }
      ],
      "done": false,
      "id": Math.random,
      "name": this.form.name.value,
      "user": {
        "id": 1
      }
    }
    console.log(requestBody);
    this._traningPlansService.createTrainingPlan(requestBody)
      .pipe(first()).subscribe(
        response => {
          console.log(response);
          this.getAllTrainingPlans()
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
    return id;
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
