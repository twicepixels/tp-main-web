"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var languages_data_1 = require('./languages-data');
var LanguageService = (function () {
    function LanguageService() {
    }
    LanguageService.prototype.getLanguages = function () {
        return Promise.resolve(languages_data_1.LANGUAGES);
    };
    LanguageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QywrQkFBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUczQztJQUFBO0lBSUEsQ0FBQztJQUhHLHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUpMO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFLYixzQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksdUJBQWUsa0JBSTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xBTkdVQUdFU30gZnJvbSAnLi9sYW5ndWFnZXMtZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2Uge1xuICAgIGdldExhbmd1YWdlcygpe1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKExBTkdVQUdFUyk7XG4gICAgfVxufVxuIl19