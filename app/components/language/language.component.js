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
var LanguageComponent = (function () {
    function LanguageComponent() {
        this.language = {};
    }
    LanguageComponent = __decorate([
        core_1.Component({
            selector: "language",
            templateUrl: "app/components/language/language.component.html",
            inputs: ["language"]
        }), 
        __metadata('design:paramtypes', [])
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFuZ3VhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFPeEM7SUFBQTtRQUNXLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQVBEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxpREFBaUQ7WUFDOUQsTUFBTSxFQUFDLENBQUMsVUFBVSxDQUFDO1NBQ3RCLENBQUM7O3lCQUFBO0lBR0Ysd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHlCQUFpQixvQkFFN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsYW5ndWFnZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgaW5wdXRzOltcImxhbmd1YWdlXCJdXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQ29tcG9uZW50e1xuICAgIHB1YmxpYyBsYW5ndWFnZSA9IHt9O1xufVxuIl19