import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';

@Component({
  selector: 'app-meals',
  templateUrl: 'meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  submitted = false;

  meal = new Meal("Hambi", "500");

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
