import { Component, OnInit, ViewChild } from '@angular/core';
import { Meal } from '../../models/meal';
import { ChartComponent } from 'src/app/chart/chart.component';
import { MealsService } from 'src/app/services/meals.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meals',
  templateUrl: 'meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  @ViewChild(ChartComponent) diagram: ChartComponent;

  public mealForm: FormGroup;
  public dailyMealsForDiagram: Meal[];
  public allAvailableMeals;
  public actKcal;
  submitted = false;

  constructor(private _formBuilder: FormBuilder, private _mealsService: MealsService) {
    this.dailyMealsForDiagram = [];
    this.allAvailableMeals = [];
  }

  onSubmit() {
    if (this.mealForm.invalid) {
      return;
    }
    this.createNewMeal();
    this.diagram.createChart();
    this.submitted = true;
  }

  ngOnInit() {
    this.mealForm = this._formBuilder.group({
      name: ['', Validators.required],
      time: ['', Validators.required]
    });
    this.getAvailableMeals();
    this.loadExistingDataToDiagram();
  }

  get form() {
    return this.mealForm.controls;
  }
  //TODO
  private loadExistingDataToDiagram() {
    let today = new Date();
    let requestPayload = {
      "userName": "user1",
      "date": today.getFullYear() + "-" + "11" + "-" + "3"
    };
    console.log(requestPayload);

    this._mealsService.getDiagramData(requestPayload)
      .pipe(first()).subscribe(
        existingMeals => {
          console.log("Existing Meals: " + existingMeals);
        }
      );
  }

  public getAvailableMeals() {
    this._mealsService.getAvailableMeals()
      .pipe(first()).subscribe(
        meals => {
          console.log(meals);
          this.allAvailableMeals = meals;
        }
      )
  }

  public createNewMeal() {
    let name = this.form.name.value;
    let time = this.form.time.value;
    let idAndKcal = this.getSelectedMealIdAndKcal();
    console.log("kcal: " + idAndKcal.kcal);
    let meal: Meal = new Meal(name, idAndKcal.kcal, time);
    console.log(meal);
    this.addNewMealToDiagram(meal);

    let requestData = {
      "date": time,
      "id": idAndKcal.id,
      "meal": {
        "id": idAndKcal.id,
      }
    };
    console.log(name + " - " + time);
    
    this._mealsService.addNewMeal(requestData)
      .pipe(first()).subscribe(
        resp => {
          console.log("POST response " + resp);
        });
  }

  public getSelectedMealIdAndKcal() {
    let id = 0;
    let kcal = 0;
    this.allAvailableMeals.forEach(element => {
      if (element.name === this.form.name.value) {
        id = element.id;
        kcal = element.calories;
        console.log("Element found: " + id + " - " + kcal);
      }
    });
    return {"id": id, "kcal": kcal};
  }

  public addNewMealToDiagram(meal: Meal) {
    this.dailyMealsForDiagram.push(meal);
  }

}
