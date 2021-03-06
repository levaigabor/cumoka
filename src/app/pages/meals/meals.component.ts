import { Component, OnInit, ViewChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { ChartComponent } from 'src/app/chart/chart.component';
import { MealsService } from 'src/app/services/user/meals/meals.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-meals',
  templateUrl: 'meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit, AfterContentInit {
  @ViewChild(ChartComponent) diagram: ChartComponent;

  public currentUserName = "";
  public mealForm: FormGroup;
  public listMealsForm: FormGroup;
  public dailyMealsForDiagram: Meal[];
  public allAvailableMeals;
  public allExistingMealsOfUser: Meal[];
  public actKcal;
  newMealSubmitted = false;
  listSubmitted = false;

  constructor(private _formBuilder: FormBuilder, private _mealsService: MealsService, private _userService: UserService) {
    this.dailyMealsForDiagram = [];
    this.allAvailableMeals = [];
    this.allExistingMealsOfUser = [];
  }

  onSubmit() {
    this.newMealSubmitted = true;

    //console.log(this.form.time.value)
    if (this.mealForm.invalid) {
      return;
    }
    this.createNewMeal();
    this.diagram.createChart();
  }

  onSubmitList() {
    if (this.listMealsForm.invalid) {
      return;
    }

    this.listSubmitted = true;
  }

  onDateListChange() {
    this.listSubmitted = true;
    this.allExistingMealsOfUser = [];
    let username = this.currentUserName;
    let date = this.listForm.time.value;
    console.log("Changed:" + date);
    this._mealsService.getMealsOfUserByDate(username, date)
      .pipe(first()).subscribe(
        meals => {
          this.handleMeals(meals, date);
        }
      );
  }

  public handleMeals(meals, date) {
    let tempMeals = meals;
    tempMeals.forEach(meal => {
      console.log(meal);
      let newMeal = new Meal(meal['name'], meal['calories'], date);
      this.allExistingMealsOfUser.push(newMeal);
    });
  }

  ngOnInit() {
    this.mealForm = this._formBuilder.group({
      name: ['', Validators.required],
      time: ['', Validators.required]
    });
    this.listMealsForm = this._formBuilder.group({
      time: ['', Validators.required]
    });
    this.getAvailableMeals();
    this.getCurrentUserName();
    // this.loadExistingDataToDiagram();
    //this.pullAllExistingMealsOfUser();
  }

  ngAfterContentInit() {
    console.log(this.allExistingMealsOfUser);
  }

  get form() {
    return this.mealForm.controls;
  }

  get listForm() {
    return this.listMealsForm.controls;
  }

  public getCurrentUserName() {
    let name;
    let id = JSON.parse(localStorage.getItem('userId'));
    this._userService.getUserById(id)
      .subscribe(
        username => {
          this.currentUserName = username["username"];
          console.log(this.currentUserName);
        }
      );
  }

  private loadExistingDataToDiagram() {
    let today = new Date();
    let requestPayload = {
      "userName": "user1",
      "date": today.getFullYear() + "-" + "11" + "-" + "03"
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

  public pullAllExistingMealsOfUser() {
    let id = JSON.parse(localStorage.getItem('userId'));
    this._mealsService.getMealsOfUser(id)
      .pipe(first()).subscribe(
        meals => {
          let meal = new Meal(meals['mealName'], 100, meals['date']);
          this.allExistingMealsOfUser.push(meal);
        }
      );
  }

  public createNewMeal() {
    let name = this.form.name.value;
    let time = this.form.time.value;
    let idAndKcal = this.getSelectedMealIdAndKcal();
    let meal: Meal = new Meal(name, idAndKcal.kcal, time);

    this.addNewMealToDiagram(meal);

    let requestData = {
      "date": time,
      "id": idAndKcal.id,
      "meal": {
        "id": idAndKcal.id,
      }
    };
    console.log(name + " - " + time);

    this._mealsService.addNewMeal(requestData, this.currentUserName)
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
    return { "id": id, "kcal": kcal };
  }

  public addNewMealToDiagram(meal: Meal) {
    this.dailyMealsForDiagram.push(meal);
  }

}
