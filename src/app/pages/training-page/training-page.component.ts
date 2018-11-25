import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import {TrainingPlansService} from '../../services/user/training-plan/training-plans.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.css']
})
export class TrainingPageComponent implements OnInit {
  private _pathSubs: Subscription;
  public training;

  constructor(private _activatedRoute: ActivatedRoute,
              private _traningPlansService: TrainingPlansService) { }

  ngOnInit() {
    this._pathSubs = this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let selectedID = + params.get('id');
      this._traningPlansService.getSpecificTraining(selectedID)
        .pipe(first()).subscribe(
        training => {
          this.training = training;
        });
    });
  }

}
