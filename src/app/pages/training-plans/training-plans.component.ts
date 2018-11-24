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
  public allTranings = [];
  public allActivities = [];
  public submitted: boolean;
  public selectedTraining;
  public selectedActivity;


  constructor(private _traningPlansService: TrainingPlansService,
    private _httpClient: HttpClient, private _router: Router) { }


  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this.getAllTrainingActivities();
  }

  public getAllTrainingPlans() {
    this._traningPlansService.getTrainingPlans()
      .pipe(first()).subscribe(plans => {
        this.allTranings = plans;
      });
  }

  public getAllTrainingActivities() {
    this._traningPlansService.getTrainingActivities()
      .pipe(first()).subscribe(
        activities => {
          this.allActivities = activities;
        }
      )
  }

  public onSelectTrainingPlan(item) {
    this.selectedTraining = item;
  }

  public onSelectActivity(item) {
    this.selectedActivity = item;
  }

}
