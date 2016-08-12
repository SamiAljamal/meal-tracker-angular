System.register(['angular2/core', './mealtracker.component', './mealtracker.model', './edit-mealtracker.component', './add-meal.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mealtracker_component_1, mealtracker_model_1, edit_mealtracker_component_1, add_meal_component_1;
    var MealTrackerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mealtracker_component_1_1) {
                mealtracker_component_1 = mealtracker_component_1_1;
            },
            function (mealtracker_model_1_1) {
                mealtracker_model_1 = mealtracker_model_1_1;
            },
            function (edit_mealtracker_component_1_1) {
                edit_mealtracker_component_1 = edit_mealtracker_component_1_1;
            },
            function (add_meal_component_1_1) {
                add_meal_component_1 = add_meal_component_1_1;
            }],
        execute: function() {
            MealTrackerListComponent = (function () {
                function MealTrackerListComponent() {
                    this.onMealTrackerSelect = new core_1.EventEmitter();
                }
                MealTrackerListComponent.prototype.mealClicked = function (clickedMealTracker) {
                    this.selectedMeal = clickedMealTracker;
                    this.onMealTrackerSelect.emit(clickedMealTracker);
                    console.log(this.selectedMeal);
                };
                MealTrackerListComponent.prototype.createMeal = function (inputArray) {
                    this.mealTrackerList.push(new mealtracker_model_1.MealTracker(inputArray[0], inputArray[1], inputArray[2]));
                };
                MealTrackerListComponent = __decorate([
                    core_1.Component({
                        selector: 'mealtracker-list',
                        inputs: ['mealTrackerList'],
                        outputs: ['onMealTrackerSelect'],
                        directives: [mealtracker_component_1.MealTrackerComponent, edit_mealtracker_component_1.EditMealTrackerDetailsComponent, add_meal_component_1.AddMealComponent],
                        template: "\n  <mealtracker-display *ngFor=\"#currentMeal of mealTrackerList\"[class.selected]=\"currentMeal ===selectedMeal\"(click)=\"mealClicked(currentMeal)\"[mealtracker]=\"currentMeal\"></mealtracker-display>\n  <add-meal (onSubmitForm)=\"createMeal($event)\"></add-meal>\n  <edit-mealtracker-details *ngIf=\"selectedMeal\"[mealtracker]=\"currentMeal\"></edit-mealtracker-details>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealTrackerListComponent);
                return MealTrackerListComponent;
            }());
            exports_1("MealTrackerListComponent", MealTrackerListComponent);
        }
    }
});
//# sourceMappingURL=mealtracker-list.component.js.map