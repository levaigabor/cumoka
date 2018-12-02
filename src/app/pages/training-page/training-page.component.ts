import { Component, OnInit, Input } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      type: [''],
      count: ['']
    });
  }

  get form() {
    return this.activityForm.controls;
  }

  onSubmit() {
    console.log(this.form.type.value);
  }

}
