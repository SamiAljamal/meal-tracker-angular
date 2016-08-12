import { Component, EventEmitter } from 'angular2/core';
import {MealTracker} from './mealtracker.model';

@Component({
  selector: 'add-meal',
  outputs: ['onSubmitForm'],
  template: `
  <div class="addmeal">
    <h2>Add Meal</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control input-lg" id="name" placeholder="Name" #addName>
    </div>
    <div class="form-group">
      <label for="specialty">Details:</label>
      <input type="text" class="form-control input-lg" id="details" placeholder="Details" #addDetails>
    </div>
    <div class="form-group">
      <label for="calories">Calories:</label>
      <input type="number" class="form-control input-lg" id="calories" placeholder="Calories" #addCalories>
    </div>

    <button (click)="addMeal(addName, addDetails, addCalories)" class="btn btn-primary btn-lg">Add</button>
  </div>
  `

})
export class AddMealComponent{
  public onSubmitForm: EventEmitter<String[]>
  constructor(){
    this.onSubmitForm = new EventEmitter();
  }
  addMeal(addName: HTMLInputElement, addDetails: HTMLInputElement, addCalories: HTMLInputElement){
    this.onSubmitForm.emit([addName.value, addDetails.value, addCalories.value]);
    addName.value="";
    addDetails.value = "";
    addCalories.value="";
  }
}
