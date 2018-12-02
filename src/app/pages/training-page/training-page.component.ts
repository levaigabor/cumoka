import { Component, OnInit, Input } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.css']
})
export class TrainingPageComponent implements OnInit {
  @Input() trainingPlan = {};
  @Input() allActivities = [];
  public training;
  public isTrainingsLoaded;
  public activityForm: FormGroup;

  constructor(private _traningPlansService: TrainingPlansService, private _formBuilder: FormBuilder) {
    this.isTrainingsLoaded = false;
  }

  ngOnInit() {
    this.activityForm = this._formBuilder.group({
      type: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  get form() {
    return this.activityForm.controls;
  }

  onActivitiesSubmit() {
    console.log(this.form.type.value);
    if(this.activityForm.invalid) {
      return;
    }
  }

}
