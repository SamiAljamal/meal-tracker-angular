import {Component} from 'angular2/core';
import {MealTracker} from './mealtracker.model';

@Component({
  selector: "edit-mealtracker-details",
  inputs: ['mealTracker'],
  template: `
  <div class="edit-form">
    <h2>Edit Meal </h2>
      <div class="form-group">
        <h3>Edit Name:</h3>
        <input [(ngModel)]="mealTracker.name" class="form-control input-lg"/>
      </div>
      <div class="form-group">
        <h3>Edit Details:</h3>
        <input [(ngModel)]="mealTracker.details" class="form-control input-lg"/>
      </div>
      <div class="form-group">
        <h3>Edit Calories:</h3>
        <input [(ngModel)]="mealTracker.calories" class="form-control input-lg"/>
      </div>
    </div>
  `
})

export class EditMealTrackerDetailsComponent{
  public mealTracker: MealTracker;
}
