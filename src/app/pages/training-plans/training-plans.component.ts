import { Component, OnInit } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  public currentUserName = "";
  public allTrainingPlans = [];
  public allActivities = [];
  public submitted: boolean = true;
  public selectedTraining = {};
  public selectedActivity;
  public trainingPlanClicked: boolean = false;
  public newPlanForm: FormGroup;

  constructor(private _traningPlansService: TrainingPlansService,
    private _httpClient: HttpClient, private _router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UserService) { }

  onSubmit() {
    this.submitted = true;
    this.onCreateNewPlan();
  }

  get form() {
    return this.newPlanForm.controls;
  }

  ngOnInit() {
    this.newPlanForm = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.getCurrentUserName();
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
    this.submitted = true;
    this.trainingPlanClicked = true;
    console.log("Selected:  ", item);

  }

  public onSelectActivity(item) {
    this.selectedActivity = item;
  }

  public onCreateNewPlan() {
    let id = JSON.parse(localStorage.getItem('userId'));
    let requestBody = {
      "activities": [],
      "done": false,
      "id": Math.random,
      "name": this.form.name.value,
      "user": {
        "id": id
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
    let id = JSON.parse(localStorage.getItem('userId'));
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
    this._traningPlansService.getTrainingPlanByUsername(this.currentUserName)
      .pipe(first()).subscribe(
        plan => {
          console.log(plan);
        }
      );
  }

  public getCurrentUserName() {
    let name;
    let id = JSON.parse(localStorage.getItem('userId'));
    this._userService.getUserById(id)
      .subscribe(
        username => {
          this.currentUserName = username["username"];
          console.log(this.currentUserName);
        }
      );
  }
}
