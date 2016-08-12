import {Component} from 'angular2/core';
import {MealTracker} from './mealtracker.model';

@Component({
  selector: 'mealtracker-display',
  inputs: ['mealtracker'],
  template: `
  <h3>{{mealtracker.name}}</h3>
  `
})

export class MealTrackerComponent {
  public mealtracker: MealTracker;
}
