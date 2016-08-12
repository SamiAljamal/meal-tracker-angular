import {Component} from 'angular2/core';
import {MealTracker} from './mealtracker.model';

@Component({
  selector: "edit-mealtracker-details",
  inputs: ['mealtracker'],
  template: `
  <div class="edit-form">
    <h2>Edit Meal </h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Edit Name:</h3>
        <input [(ngModel)]="mealtracker.name" class="input-lg"/>
      </div>
      <div class="col-md-6">
        <h3>Edit Details:</h3>
        <input [(ngModel)]="mealtracker.details" class="input-lg"/>
      </div>
      <div class="col-md-6">
        <h3>Edit Calories:</h3>
        <input [(ngModel)]="mealtracker.calories" class="input-lg"/>
      </div>
    </div>
  </div>
  `
})

export class EditMealTrackerDetailsComponent{
  public mealtracker: MealTracker;
}
