import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { ChartComponent } from 'src/app/chart/chart.component';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: 'meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  public dailyMealsForDiagram: Meal[];

  constructor(private _mealsService: MealsService) {
    this.dailyMealsForDiagram = [];
    this.dailyMealsForDiagram.push(new Meal("Hambi", 500));
   }
  submitted = false;

  meal = new Meal("Hambi", 500);

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    let requestPayload = {
      "id": 2,
      "date": "2018-11-11"
    };

    this._mealsService.getDiagramData(requestPayload);
  }

}
