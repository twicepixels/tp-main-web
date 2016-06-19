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
var core_1 = require("@angular/core");
var language_service_1 = require("../../services/language.service/language.service");
var language_component_1 = require("./language.component");
var LanguageListComponent = (function () {
    function LanguageListComponent(_languageService) {
        this._languageService = _languageService;
        this.selectedLanguage = {};
        this.getLanguages();
    }
    LanguageListComponent.prototype.onNameClick = function (language) {
        this.selectedLanguage = language;
    };
    // make a call to our language service
    LanguageListComponent.prototype.getLanguages = function () {
        var _this = this;
        this._languageService.getLanguages().then(function (languages) { return _this.languages = languages; });
    };
    LanguageListComponent = __decorate([
        core_1.Component({
            selector: "my-app-lan",
            templateUrl: "app/components/language.component/language-list.component.html",
            directives: [language_component_1.LanguageComponent],
            providers: [language_service_1.LanguageService],
            styles: ["\n                body{\n                    padding:0;\n                    margin:0;\n                    font-family:Roboto,Arial,sans-serif;\n                    font-size:16px\n                }\n                .title {\n                    color:#018EFA;\n                }\n                .clicked{\n                    background-color: #9C00FE;\n                    color:white;\n                }\n                .labels{\n                    background-color: black;\n                    color: white;\n                }\n    "]
        }), 
        __metadata('design:paramtypes', [language_service_1.LanguageService])
    ], LanguageListComponent);
    return LanguageListComponent;
}());
exports.LanguageListComponent = LanguageListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5ndWFnZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLGlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBQ2pGLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBNkJ2RDtJQVFJLCtCQUFvQixnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUw5QyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFNekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFMTSwyQ0FBVyxHQUFsQixVQUFtQixRQUFZO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUtELHNDQUFzQztJQUN0Qyw0Q0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBb0IsSUFBRyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbEcsQ0FBQztJQXhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsZ0VBQWdFO1lBQzdFLFVBQVUsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBQyxDQUFDLGtDQUFlLENBQUM7WUFDM0IsTUFBTSxFQUFDLENBQUMsOGhCQWtCUCxDQUFDO1NBQ0wsQ0FBQzs7NkJBQUE7SUFrQkYsNEJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLDZCQUFxQix3QkFpQmpDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtMYW5ndWFnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlL2xhbmd1YWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7TGFuZ3VhZ2VDb21wb25lbnR9IGZyb20gXCIuL2xhbmd1YWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMYW5ndWFnZX0gZnJvbSBcIi4vbGFuZ3VhZ2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHAtbGFuXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2UuY29tcG9uZW50L2xhbmd1YWdlLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbTGFuZ3VhZ2VDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczpbTGFuZ3VhZ2VTZXJ2aWNlXSwgXG4gICAgc3R5bGVzOltgXG4gICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6Um9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMThFRkE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jbGlja2Vke1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUMwMEZFO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVsc3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VMaXN0Q29tcG9uZW50e1xuICAgIHB1YmxpYyBsYW5ndWFnZXMgOiBMYW5ndWFnZVtdO1xuXG4gICAgcHVibGljIHNlbGVjdGVkTGFuZ3VhZ2UgPSB7fTtcblxuICAgIHB1YmxpYyBvbk5hbWVDbGljayhsYW5ndWFnZTphbnkpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2Upe1xuICAgICAgICB0aGlzLmdldExhbmd1YWdlcygpO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYSBjYWxsIHRvIG91ciBsYW5ndWFnZSBzZXJ2aWNlXG4gICAgZ2V0TGFuZ3VhZ2VzKCl7ICAvLzRcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VTZXJ2aWNlLmdldExhbmd1YWdlcygpLnRoZW4oKGxhbmd1YWdlczpMYW5ndWFnZVtdKT0+dGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXMpO1xuICAgIH1cblxufVxuXG4iXX0=