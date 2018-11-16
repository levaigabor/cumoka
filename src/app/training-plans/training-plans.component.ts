import { Component, OnInit } from '@angular/core';
import { TrainingPlan } from '../training-plan';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.css']
})
export class TrainingPlansComponent implements OnInit {

  constructor() { }

  submitted = false;
  plan = new TrainingPlan("Fekvőtámasz", new Date("2018-11-10") ,120);

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
