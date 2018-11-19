import { Component, OnInit } from '@angular/core';
import { TrainingPlan } from '../training-plan';
import {TrainingPlansService} from '../services/training-plans.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  private _subs;
  public allTranings;
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
    this._subs = this._traningPlansService.getTrainingPlans().subscribe((plans) => {
      this.allTranings = plans;
      this._subs.unsubscribe();
    }, (error) => {
      console.log('Couldn\'t load plans. Error Description: ' + error);
    });
  }

  public Login() {
    this._httpClient.post<HttpResponse<Object>>(`/authenticate`, {  }).toPromise()
      .then(
        (resp) => {
          this._router.navigate(["dashboard"]);
        },
        (resp) => {
         console.log('Bad password! Try again...');
        }
      );
  }

}
