"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// FormBuilder with NgFormControl.
var common_1 = require('@angular/common');
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var angular2localization_3 = require('angular2localization/angular2localization');
// Directives for FormBuilder with NgFormControl.
var angular2localization_4 = require('angular2localization/angular2localization');
// Directives for NgControl.
/*import {LocaleNumberValidator} from 'angular2localization/angular2localization';*/
var ValidationComponent = (function (_super) {
    __extends(ValidationComponent, _super);
    function ValidationComponent(locale, localization, fb) {
        _super.call(this, locale, localization);
        this.locale = locale;
        this.localization = localization;
        this.fb = fb;
        this.value = "";
        // Options.
        this.digits = "1.2-2";
        this.minValue = -Math.round(Math.random() * 10000) / 100;
        this.maxValue = Math.round(Math.random() * 10000) / 100;
        this.parsedValue = null;
        this.numberForm = fb.group({
            'decimal': ['', angular2localization_4.validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
        });
    }
    ValidationComponent.prototype.onSubmit = function (value) {
        this.parsedValue = angular2localization_1.LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());
    };
    ValidationComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/temp/validation.component.html',
            pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDecimalPipe],
            directives: [angular2localization_4.LocaleNumberValidator, card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, common_1.FormBuilder])
    ], ValidationComponent);
    return ValidationComponent;
}(angular2localization_1.Locale));
exports.ValidationComponent = ValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsa0NBQWtDO0FBQ2xDLHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELHNCQUFzQjtBQUN0QixxQkFBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCxzQkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RCx1QkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRCxZQUFZO0FBQ1oscUNBQXVFLDJDQUEyQyxDQUFDLENBQUE7QUFDbkgsU0FBUztBQUNULHFDQUE0QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3hFLHFDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLGlEQUFpRDtBQUNqRCxxQ0FBMEQsMkNBQTJDLENBQUMsQ0FBQTtBQUN0Ryw0QkFBNEI7QUFDNUIsb0ZBQW9GO0FBUXBGO0lBQXlDLHVDQUFNO0lBYzNDLDZCQUFtQixNQUFxQixFQUFTLFlBQWlDLEVBQVUsRUFBZTtRQUN2RyxrQkFBTSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFEWixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVozRyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFdBQVc7UUFDWCxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxhQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTNELGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBUXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsMkNBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hHLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUVmLElBQUksQ0FBQyxXQUFXLEdBQUcsbUNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBakNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxpREFBaUQ7WUFDOUQsS0FBSyxFQUFFLENBQUMsb0NBQWEsRUFBRSx3Q0FBaUIsQ0FBQztZQUN6QyxVQUFVLEVBQUUsQ0FBQyw0Q0FBcUIsRUFBRSx5QkFBa0IsRUFBRSwyQkFBbUIsRUFBRSxpQkFBUSxDQUFDO1NBQ3pGLENBQUM7OzJCQUFBO0lBOEJGLDBCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUF5Qyw2QkFBTSxHQTRCOUM7QUE1QlksMkJBQW1CLHNCQTRCL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEZvcm1CdWlsZGVyIHdpdGggTmdGb3JtQ29udHJvbC5cbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFuZ3VsYXIgMiBNYXRlcmlhbC5cbmltcG9ydCB7TURfQ0FSRF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcbi8vIFNlcnZpY2VzLlxuaW1wb3J0IHtMb2NhbGUsIExvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UsIExvY2FsZVBhcnNlcn0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbmltcG9ydCB7TG9jYWxlRGVjaW1hbFBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbi8vIERpcmVjdGl2ZXMgZm9yIEZvcm1CdWlsZGVyIHdpdGggTmdGb3JtQ29udHJvbC5cbmltcG9ydCB7TG9jYWxlTnVtYmVyVmFsaWRhdG9yLCB2YWxpZGF0ZUxvY2FsZU51bWJlcn0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuLy8gRGlyZWN0aXZlcyBmb3IgTmdDb250cm9sLlxuLyppbXBvcnQge0xvY2FsZU51bWJlclZhbGlkYXRvcn0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nOyovXG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy90ZW1wL3ZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgTG9jYWxlRGVjaW1hbFBpcGVdLFxuICAgIGRpcmVjdGl2ZXM6IFtMb2NhbGVOdW1iZXJWYWxpZGF0b3IsIE1EX0NBUkRfRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFUywgTWRCdXR0b25dXG59KVxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIExvY2FsZSB7XG5cbiAgICB2YWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIC8vIE9wdGlvbnMuXG4gICAgZGlnaXRzOiBzdHJpbmcgPSBcIjEuMi0yXCI7XG4gICAgbWluVmFsdWU6IG51bWJlciA9IC1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgLyAxMDA7XG4gICAgbWF4VmFsdWU6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSAvIDEwMDtcblxuICAgIHBhcnNlZFZhbHVlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgLy8gRm9ybUJ1aWxkZXIgd2l0aCBOZ0Zvcm1Db250cm9sLlxuICAgIG51bWJlckZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvblNlcnZpY2UsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKGxvY2FsZSwgbG9jYWxpemF0aW9uKVxuXG4gICAgICAgIHRoaXMubnVtYmVyRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgICdkZWNpbWFsJzogWycnLCB2YWxpZGF0ZUxvY2FsZU51bWJlcih0aGlzLmxvY2FsZSwgdGhpcy5kaWdpdHMsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpXVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcblxuICAgICAgICB0aGlzLnBhcnNlZFZhbHVlID0gTG9jYWxlUGFyc2VyLk51bWJlcih2YWx1ZS5kZWNpbWFsLCB0aGlzLmxvY2FsZS5nZXREZWZhdWx0TG9jYWxlKCkpO1xuXG4gICAgfVxufSJdfQ==