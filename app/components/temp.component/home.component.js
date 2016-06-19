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
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var angular2localization_3 = require('angular2localization/angular2localization');
var angular2localization_4 = require('angular2localization/angular2localization');
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(locale, localization) {
        _super.call(this, locale, localization);
        this.locale = locale;
        this.localization = localization;
        this.today = Date.now();
        this.pi = 3.14159;
        this.a = Math.round(Math.random() * 100) / 100;
        this.b = Math.round(Math.random() * 1000000) / 100;
        this.intlSupport = angular2localization_1.IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && angular2localization_1.IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
    }
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/temp.component/home.component.html',
            pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDatePipe, angular2localization_4.LocaleDecimalPipe, angular2localization_4.LocalePercentPipe, angular2localization_4.LocaleCurrencyPipe],
            directives: [card_1.MD_CARD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], HomeComponent);
    return HomeComponent;
}(angular2localization_1.Locale));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELFlBQVk7QUFDWixxQ0FBc0UsMkNBQTJDLENBQUMsQ0FBQTtBQUNsSCxTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUscUNBQTZCLDJDQUEyQyxDQUFDLENBQUE7QUFDekUscUNBQXVFLDJDQUEyQyxDQUFDLENBQUE7QUFRbkg7SUFBbUMsaUNBQU07SUFTckMsdUJBQW1CLE1BQXFCLEVBQVMsWUFBaUM7UUFDOUUsa0JBQU0sTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRGIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUc5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGtDQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztlQUN0RSxrQ0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7ZUFDeEQsa0NBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFFbEUsQ0FBQztJQTdCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUscURBQXFEO1lBQ2xFLEtBQUssRUFBRSxDQUFDLG9DQUFhLEVBQUUscUNBQWMsRUFBRSx3Q0FBaUIsRUFBRSx3Q0FBaUIsRUFBRSx5Q0FBa0IsQ0FBQztZQUNoRyxVQUFVLEVBQUUsQ0FBQyx5QkFBa0IsQ0FBQztTQUNuQyxDQUFDOztxQkFBQTtJQTJCRixvQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBbUMsNkJBQU0sR0F5QnhDO0FBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFuZ3VsYXIgMiBNYXRlcmlhbC5cbmltcG9ydCB7TURfQ0FSRF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZCc7XG4vLyBTZXJ2aWNlcy5cbmltcG9ydCB7TG9jYWxlLCBMb2NhbGVTZXJ2aWNlLCBMb2NhbGl6YXRpb25TZXJ2aWNlLCBJbnRsU3VwcG9ydH0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbmltcG9ydCB7TG9jYWxlRGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbmltcG9ydCB7TG9jYWxlRGVjaW1hbFBpcGUsIExvY2FsZVBlcmNlbnRQaXBlLCBMb2NhbGVDdXJyZW5jeVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3RlbXAuY29tcG9uZW50L2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgTG9jYWxlRGF0ZVBpcGUsIExvY2FsZURlY2ltYWxQaXBlLCBMb2NhbGVQZXJjZW50UGlwZSwgTG9jYWxlQ3VycmVuY3lQaXBlXSxcbiAgICBkaXJlY3RpdmVzOiBbTURfQ0FSRF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBMb2NhbGUge1xuXG4gICAgaW50bFN1cHBvcnQ6IGJvb2xlYW47XG5cbiAgICB0b2RheTogbnVtYmVyO1xuICAgIHBpOiBudW1iZXI7XG4gICAgYTogbnVtYmVyO1xuICAgIGI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIobG9jYWxlLCBsb2NhbGl6YXRpb24pO1xuXG4gICAgICAgIHRoaXMudG9kYXkgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucGkgPSAzLjE0MTU5O1xuXG4gICAgICAgIHRoaXMuYSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIHRoaXMuYiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApIC8gMTAwO1xuXG4gICAgICAgIHRoaXMuaW50bFN1cHBvcnQgPSBJbnRsU3VwcG9ydC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZS5nZXREZWZhdWx0TG9jYWxlKCkpXG4gICAgICAgICAgICAmJiBJbnRsU3VwcG9ydC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUuZ2V0RGVmYXVsdExvY2FsZSgpKVxuICAgICAgICAgICAgJiYgSW50bFN1cHBvcnQuQ29sbGF0b3IodGhpcy5sb2NhbGUuZ2V0Q3VycmVudExhbmd1YWdlKCkpO1xuXG4gICAgfVxuXG59Il19