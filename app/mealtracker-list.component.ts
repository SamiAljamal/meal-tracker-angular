import {Component, EventEmitter} from 'angular2/core';
import {MealTrackerComponent} from './mealtracker.component';
import {MealTracker} from './mealtracker.model';
import {EditMealTrackerDetailsComponent} from './edit-mealtracker.component';
import {AddMealComponent} from './add-meal.component';

@Component({
  selector: 'mealtracker-list',
  inputs: ['mealTrackerList'],
  outputs: ['onMealTrackerSelect'],
  directives:[MealTrackerComponent,EditMealTrackerDetailsComponent,AddMealComponent],
  template: `
  <mealtracker-display *ngFor="#currentMeal of mealTrackerList"[class.selected]="currentMeal ===selectedMeal"(click)="mealClicked(currentMeal)"[mealtracker]="currentMeal"></mealtracker-display>
  <add-meal (onSubmitForm)="createMeal($event)"></add-meal>
  <edit-mealtracker-details *ngIf="selectedMeal"[mealTracker]="selectedMeal"></edit-mealtracker-details>

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

  createMeal(inputArray): void{
    this.mealTrackerList.push(
      new MealTracker(inputArray[0],inputArray[1],inputArray[2])
    );
  }


}
