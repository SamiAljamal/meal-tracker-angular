import {Component, EventEmitter} from 'angular2/core';
import {MealTrackerComponent} from './mealtracker.component';
import {MealTracker} from './mealtracker.model';
import {EditMealTrackerDetailsComponent} from './edit-mealtracker.component';
import {AddMealComponent} from './add-meal.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'mealtracker-list',
  inputs: ['mealTrackerList'],
  outputs: ['onMealTrackerSelect'],
  pipes: [CaloriesPipe],
  directives:[MealTrackerComponent,EditMealTrackerDetailsComponent,AddMealComponent],
  template: `
  <label>Filter</label>
  <div class="select">
    <select (change)="onChange($event.target.value)">
      <option value="0-400">0-400</option>
      <option value="400-800">400-800</option>
      <option value="800+">800+</option>
      <option value="showall">Show All</option>
    </select>
  </div>
  <hr>
  <mealtracker-display *ngFor="#currentMeal of mealTrackerList | calories:selectedCalories"[class.selected]="currentMeal ===selectedMeal"(click)="mealClicked(currentMeal)"[mealtracker]="currentMeal"></mealtracker-display>
  <hr>
  <add-meal (onSubmitForm)="createMeal($event)"></add-meal>
  <hr>
  <edit-mealtracker-details *ngIf="selectedMeal"[mealTracker]="selectedMeal"></edit-mealtracker-details>

  `
})

export class MealTrackerListComponent{
  public mealTrackerList: MealTracker[];
  public selectedMeal: MealTracker;
  public selectedCalories: string = "showall";
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

  onChange(optionFromDropDown){
    this.selectedCalories = optionFromDropDown;
  }


}
