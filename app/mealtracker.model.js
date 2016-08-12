System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MealTracker;
    return {
        setters:[],
        execute: function() {
            MealTracker = (function () {
                function MealTracker(name, details, calories) {
                    this.name = name;
                    this.details = details;
                    this.calories = calories;
                }
                return MealTracker;
            }());
            exports_1("MealTracker", MealTracker);
        }
    }
});
//# sourceMappingURL=mealtracker.model.js.map