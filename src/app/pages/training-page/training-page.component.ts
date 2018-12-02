import { Component, OnInit, Input } from '@angular/core';
import { TrainingPlansService } from '../../services/user/training-plan/training-plans.service';
import { first } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

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


  constructor(private _traningPlansService: TrainingPlansService, private _formBuilder: FormBuilder) {
    this.isTrainingsLoaded = false;
  }

  ngOnInit() {

    /*
    this._traningPlansService.getSpecificTraining(this.id)
      .pipe(first()).subscribe(
        training => {
          this.training = training;
          this.isTrainingsLoaded = true;
          console.log(this.training["name"]);
        });

    */
  }

  onSubmit() {

  }

}
