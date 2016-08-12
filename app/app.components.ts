import { Component,EventEmitter } from 'angular2/core';
import {MealTracker} from './mealtracker.model';
import {MealTrackerListComponent} from './mealtracker-list.component';
@Component({
  selector: 'my-app',
  directives: [MealTrackerListComponent],
  template: `
  <h1>Meal Tracker</h1>
  <hr>
  <mealtracker-list [mealTrackerList]="mealtracker"></mealtracker-list>
  `
})
export class AppComponent{
  public mealtracker: MealTracker[];
  constructor(){
    this.mealtracker =[
      new MealTracker("Hamburger","Didn't get cheese with it. I hate my life...",354),
      new MealTracker("Fries","They were awesome.",600),
      new MealTracker("Soda","IT WAS DIET!",0),
      new MealTracker("Salad","It was lettuce and a pound of Ranch dressing",1000)
    ]
  }
}
