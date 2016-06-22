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
            templateUrl: "app/components/language/language-list.component.html",
            directives: [language_component_1.LanguageComponent],
            providers: [language_service_1.LanguageService],
            styles: ["\n                body{\n                    padding:0;\n                    margin:0;\n                    font-family:Roboto,Arial,sans-serif;\n                    font-size:16px\n                }\n                .title {\n                    color:#018EFA;\n                }\n                .clicked{\n                    background-color: #9C00FE;\n                    color:white;\n                }\n                .labels{\n                    background-color: black;\n                    color: white;\n                }\n    "]
        }), 
        __metadata('design:paramtypes', [language_service_1.LanguageService])
    ], LanguageListComponent);
    return LanguageListComponent;
}());
exports.LanguageListComponent = LanguageListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5ndWFnZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLGlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBQ2pGLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBNkJ2RDtJQVFJLCtCQUFvQixnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUw5QyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFNekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFMTSwyQ0FBVyxHQUFsQixVQUFtQixRQUFZO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUtELHNDQUFzQztJQUN0Qyw0Q0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBb0IsSUFBRyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbEcsQ0FBQztJQXhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsc0RBQXNEO1lBQ25FLFVBQVUsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBQyxDQUFDLGtDQUFlLENBQUM7WUFDM0IsTUFBTSxFQUFDLENBQUMsOGhCQWtCUCxDQUFDO1NBQ0wsQ0FBQzs7NkJBQUE7SUFrQkYsNEJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLDZCQUFxQix3QkFpQmpDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtMYW5ndWFnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlL2xhbmd1YWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7TGFuZ3VhZ2VDb21wb25lbnR9IGZyb20gXCIuL2xhbmd1YWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMYW5ndWFnZX0gZnJvbSBcIi4vbGFuZ3VhZ2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHAtbGFuXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFtMYW5ndWFnZUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOltMYW5ndWFnZVNlcnZpY2VdLCBcbiAgICBzdHlsZXM6W2BcbiAgICAgICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAxOEVGQTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNsaWNrZWR7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5QzAwRkU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGFiZWxze1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZUxpc3RDb21wb25lbnR7XG4gICAgcHVibGljIGxhbmd1YWdlcyA6IExhbmd1YWdlW107XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRMYW5ndWFnZSA9IHt9O1xuXG4gICAgcHVibGljIG9uTmFtZUNsaWNrKGxhbmd1YWdlOmFueSl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSl7XG4gICAgICAgIHRoaXMuZ2V0TGFuZ3VhZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhIGNhbGwgdG8gb3VyIGxhbmd1YWdlIHNlcnZpY2VcbiAgICBnZXRMYW5ndWFnZXMoKXsgIC8vNFxuICAgICAgICB0aGlzLl9sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2VzKCkudGhlbigobGFuZ3VhZ2VzOkxhbmd1YWdlW10pPT50aGlzLmxhbmd1YWdlcyA9IGxhbmd1YWdlcyk7XG4gICAgfVxuXG59XG5cbiJdfQ==