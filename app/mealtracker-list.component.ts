import {Component, EventEmitter} from 'angular2/core';
import {MealTrackerComponent} from './mealtracker.component';
import {MealTracker} from './mealtracker.model';
import {EditMealTrackerDetailsComponent} from './edit-mealtracker.component';

@Component({
  selector: 'mealtracker-list',
  inputs: ['mealTrackerList'],
  outputs: ['onMealTrackerSelect'],
  directives:[MealTrackerComponent,EditMealTrackerDetailsComponent],
  template: `
  <mealtracker-display *ngFor="#currentMeal of mealTrackerList"[class.selected]="currentMeal ===selectedMeal"(click)="mealClicked(currentMeal)"[mealtracker]="currentMeal"></mealtracker-display>
  <edit-mealtracker-details *ngIf="selectedMeal"[mealtracker]="currentMeal"></edit-mealtracker-details>
  `
})

export class MealTrackerListComponent{
  public mealTrackerList: MealTracker[];
  public selectedMeal: MealTracker;
  public onMealTrackerSelect: EventEmitter<MealTracker>;
  constructor(){
    this.onMealTrackerSelect= new EventEmitter();
  }
  mealClicked(clickedMealTracker: MealTracker): void {
    this.selectedMeal = clickedMealTracker;
    this.onMealTrackerSelect.emit(clickedMealTracker);
    console.log(this.selectedMeal);
  }
}
