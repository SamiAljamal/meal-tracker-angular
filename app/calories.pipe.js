System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CaloriesPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CaloriesPipe = (function () {
                function CaloriesPipe() {
                }
                CaloriesPipe.prototype.transform = function (input, info) {
                    var desiredCalories = info[0];
                    var output = [];
                    for (var i = 0; i < input.length; i++) {
                        if (desiredCalories === "0-400") {
                            if (input[i].calories <= 400) {
                                output.push(input[i]);
                            }
                        }
                        else if (desiredCalories === "400-800") {
                            if (input[i].calories > 400 && input[i].calories <= 800) {
                                output.push(input[i]);
                            }
                        }
                        else if (desiredCalories === "800+") {
                            if (input[i].calories >= 800) {
                                output.push(input[i]);
                            }
                        }
                        else {
                            if (desiredCalories === "showall") {
                                output.push(input[i]);
                            }
                        }
                    }
                    return output;
                };
                CaloriesPipe = __decorate([
                    core_1.Pipe({
                        name: "calories",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], CaloriesPipe);
                return CaloriesPipe;
            }());
            exports_1("CaloriesPipe", CaloriesPipe);
        }
    }
});
//# sourceMappingURL=calories.pipe.js.map