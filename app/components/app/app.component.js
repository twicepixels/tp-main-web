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
//import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
// Angular 2 Material.
var dir_1 = require('@angular2-material/core/rtl/dir');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var toolbar_1 = require('@angular2-material/toolbar');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(/*private router: Router,*/ locale, localization) {
        _super.call(this, null, localization);
        this.locale = locale;
        this.localization = localization;
        // Adds a new language (ISO 639 two-letter or three-letter code).
        this.locale.addLanguage('en');
        this.locale.addLanguage('it');
        this.locale.addLanguage('ar');
        this.locale.addLanguage('es');
        // Add a new language here.
        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);
        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');
        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./app/I18n/locale-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.
        // Initializes direction.
        if (this.locale.getCurrentLanguage() == "ar") {
            this.dir = 'rtl';
        }
        else {
            this.dir = 'ltr';
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.router.navigate(['/home']);
    };
    Object.defineProperty(AppComponent.prototype, "currentCountry", {
        // Gets the current country.
        get: function () {
            return this.locale.getCurrentCountry();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a new locale & currency.
    AppComponent.prototype.selectLocale = function (language, country, currency) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            directives: [dir_1.Dir, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, toolbar_1.MdToolbar],
            templateUrl: './app/components/app/app.component.html',
            providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
            pipes: [angular2localization_2.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], AppComponent);
    return AppComponent;
}(angular2localization_1.Locale));
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELG9FQUFvRTtBQUNwRSxzQkFBc0I7QUFDdEIsb0JBQWtCLGlDQUFpQyxDQUFDLENBQUE7QUFDcEQsd0JBQW9DLDRCQUE0QixDQUFDLENBQUE7QUFDakUscUJBQWlDLHlCQUF5QixDQUFDLENBQUE7QUFDM0Qsd0JBQXdCLDRCQUE0QixDQUFDLENBQUE7QUFDckQsWUFBWTtBQUNaLHFDQUF5RCwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JHLFNBQVM7QUFDVCxxQ0FBNEIsMkNBQTJDLENBQUMsQ0FBQTtBQXlCeEU7SUFBa0MsZ0NBQU07SUFJcEMsc0JBQVksMkJBQTJCLENBQVEsTUFBcUIsRUFBUyxZQUFpQztRQUMxRyxrQkFBTSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEaUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUcxRyxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsMkJBQTJCO1FBRTNCLGlLQUFpSztRQUNqSyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEQsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MseURBQXlEO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtRQUMxSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7UUFFekUseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRXJCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRXJCLENBQUM7SUFFTCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUVJLGtDQUFrQztJQUV0QyxDQUFDO0lBR0Qsc0JBQUksd0NBQWM7UUFEbEIsNEJBQTRCO2FBQzVCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzQyxDQUFDOzs7T0FBQTtJQUVELGdDQUFnQztJQUNoQyxtQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBdkVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUF3QixTQUFHLEVBQUUsK0JBQXFCLEVBQUUseUJBQWtCLEVBQUUsbUJBQVMsQ0FBQztZQUM5RixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLG9DQUFhLEVBQUUsMENBQW1CLENBQUM7WUFDL0MsS0FBSyxFQUFFLENBQUMsb0NBQWEsQ0FBQztTQUN6QixDQUFDOztvQkFBQTtJQW1FRixtQkFBQztBQUFELENBQUMsQUExREQsQ0FBa0MsNkJBQU0sR0EwRHZDO0FBMURZLG9CQUFZLGVBMER4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7Um91dGVzLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxuaW1wb3J0IHtEaXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jb3JlL3J0bC9kaXInO1xuaW1wb3J0IHtNRF9TSURFTkFWX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xuLy8gU2VydmljZXMuXG5pbXBvcnQge0xvY2FsZSwgTG9jYWxlU2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbi8vIENvbXBvbmVudHMuXG4vKlxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi8uLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0kxOG5Db21wb25lbnR9IGZyb20gJy4uLy4uL2kxOG4uY29tcG9uZW50JztcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtWYWxpZGF0aW9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi92YWxpZGF0aW9uLmNvbXBvbmVudCc7XG4qL1xuZXhwb3J0IHR5cGUgTGF5b3V0RGlyZWN0aW9uID0gJ2x0cicgfCAncnRsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY29tcG9uZW50JyxcbiAgICBkaXJlY3RpdmVzOiBbLypST1VURVJfRElSRUNUSVZFUywqLyBEaXIsIE1EX1NJREVOQVZfRElSRUNUSVZFUywgTURfTElTVF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXJdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtMb2NhbGVTZXJ2aWNlLCBMb2NhbGl6YXRpb25TZXJ2aWNlXSwgLy8gSW5oZXJpdGVkIGJ5IGFsbCBkZXNjZW5kYW50cy5cbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdXG59KVxuLypcbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2kxOG4nLCBjb21wb25lbnQ6IEkxOG5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvbGlzdCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy92YWxpZGF0aW9uJywgY29tcG9uZW50OiBWYWxpZGF0aW9uQ29tcG9uZW50IH1cbl0pXG4qL1xuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBleHRlbmRzIExvY2FsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBkaXI6IExheW91dERpcmVjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKC8qcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwqLyBwdWJsaWMgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLCBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKG51bGwsIGxvY2FsaXphdGlvbik7XG5cbiAgICAgICAgLy8gQWRkcyBhIG5ldyBsYW5ndWFnZSAoSVNPIDYzOSB0d28tbGV0dGVyIG9yIHRocmVlLWxldHRlciBjb2RlKS5cbiAgICAgICAgdGhpcy5sb2NhbGUuYWRkTGFuZ3VhZ2UoJ2VuJyk7XG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdpdCcpO1xuICAgICAgICB0aGlzLmxvY2FsZS5hZGRMYW5ndWFnZSgnYXInKTtcbiAgICAgICAgdGhpcy5sb2NhbGUuYWRkTGFuZ3VhZ2UoJ2VzJyk7XG4gICAgICAgIC8vIEFkZCBhIG5ldyBsYW5ndWFnZSBoZXJlLlxuXG4gICAgICAgIC8vIFJlcXVpcmVkOiBkZWZhdWx0IGxhbmd1YWdlLCBjb3VudHJ5IChJU08gMzE2NiB0d28tbGV0dGVyLCB1cHBlcmNhc2UgY29kZSkgYW5kIGV4cGlyeSAoTm8gZGF5cykuIElmIHRoZSBleHBpcnkgaXMgb21pdHRlZCwgdGhlIGNvb2tpZSBiZWNvbWVzIGEgc2Vzc2lvbiBjb29raWUuXG4gICAgICAgIHRoaXMubG9jYWxlLmRlZmluZVByZWZlcnJlZExvY2FsZSgnZW4nLCAnVVMnLCAzMCk7XG5cbiAgICAgICAgLy8gT3B0aW9uYWw6IGRlZmF1bHQgY3VycmVuY3kgKElTTyA0MjE3IHRocmVlLWxldHRlciBjb2RlKS5cbiAgICAgICAgdGhpcy5sb2NhbGUuZGVmaW5lUHJlZmVycmVkQ3VycmVuY3koJ1VTRCcpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemVzIExvY2FsaXphdGlvblNlcnZpY2U6IGFzeW5jaHJvbm91cyBsb2FkaW5nLlxuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblByb3ZpZGVyKCcuL2FwcC9JMThuL2xvY2FsZS0nKTsgLy8gUmVxdWlyZWQ6IGluaXRpYWxpemVzIHRoZSB0cmFuc2xhdGlvbiBwcm92aWRlciB3aXRoIHRoZSBnaXZlbiBwYXRoIHByZWZpeC5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udXBkYXRlVHJhbnNsYXRpb24oKTsgLy8gTmVlZCB0byB1cGRhdGUgdGhlIHRyYW5zbGF0aW9uLlxuXG4gICAgICAgIC8vIEluaXRpYWxpemVzIGRpcmVjdGlvbi5cbiAgICAgICAgaWYgKHRoaXMubG9jYWxlLmdldEN1cnJlbnRMYW5ndWFnZSgpID09IFwiYXJcIikge1xuXG4gICAgICAgICAgICB0aGlzLmRpciA9ICdydGwnO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuZGlyID0gJ2x0cic7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuXG4gICAgfVxuXG4gICAgLy8gR2V0cyB0aGUgY3VycmVudCBjb3VudHJ5LlxuICAgIGdldCBjdXJyZW50Q291bnRyeSgpOiBzdHJpbmcge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZS5nZXRDdXJyZW50Q291bnRyeSgpO1xuXG4gICAgfVxuXG4gICAgLy8gU2V0cyBhIG5ldyBsb2NhbGUgJiBjdXJyZW5jeS5cbiAgICBzZWxlY3RMb2NhbGUobGFuZ3VhZ2U6IHN0cmluZywgY291bnRyeTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5sb2NhbGUuc2V0Q3VycmVudExvY2FsZShsYW5ndWFnZSwgY291bnRyeSk7XG4gICAgICAgIHRoaXMubG9jYWxlLnNldEN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeSk7XG5cbiAgICB9XG5cbn0iXX0=