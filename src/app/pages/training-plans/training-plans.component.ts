import { Component, OnInit } from '@angular/core';
import {TrainingPlansService} from '../../services/user/training-plan/training-plans.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  private _subs;
  public allTranings = [];
  public submitted: boolean;

  public testJson = [
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
    {'time': '2018-11-15',
      'name': 'push-up',
      'count': '15'
    },
  ]

  constructor(private _traningPlansService: TrainingPlansService,
              private _httpClient: HttpClient, private _router: Router) { }


  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  public getAllTrainingPlans() {
    this._subs = this._traningPlansService.getTrainingPlans().subscribe((trainings) => {
      this.allTranings = trainings;
      this._subs.unsubscribe();
      console.log(this.allTranings)
    }, (error) => {
    console.log(error)
    });

  }

}
