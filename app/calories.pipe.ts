import {Pipe, PipeTransform} from 'angular2/core';
import {MealTracker} from './mealtracker.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform{
  transform(input: MealTracker[], info){
    var desiredCalories = info[0];
    var output: MealTracker[] = [];
    for(var i = 0; i < input.length; i++){
      if(desiredCalories === "0-400"){
        if(input[i].calories <= 400){
          output.push(input[i]);
        }
      }
      else if(desiredCalories === "400-800"){
        if(input[i].calories >400 && input[i].calories <=800){
          output.push(input[i]);
        }
      }
      else if(desiredCalories === "800+"){
        if(input[i].calories >= 800){
          output.push(input[i]);
        }
      }
      else
      {
        if(desiredCalories === "showall"){
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
