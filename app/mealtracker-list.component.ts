import {Component, EventEmitter} from 'angular2/core';
import {MealTrackerComponent} from './mealtracker.component';
import {MealTracker} from './mealtracker.model';

@Component({
  selector: 'mealtracker-list',
  inputs: ['mealTrackerList'],
  outputs: ['onMealTrackerSelect'],
  directives:[MealTrackerComponent],
  template: `
  <mealtracker-display *ngFor="#currentMeal of mealTrackerList" [class.selected]="currentMeal===selectedMeal"(click)="mealClicked(currentMeal)"[mealtracker]="currentMeal"></mealtracker-display>

  `
})

export class MealTrackerListComponent{
  public mealTrackerList: MealTracker[];
  public selectedMeal: MealTracker;
  public onMealTrackerSelect: EventEmitter<MealTracker>;
  constructor(){
    this.onMealTrackerSelect= new EventEmitter();
  }
}
