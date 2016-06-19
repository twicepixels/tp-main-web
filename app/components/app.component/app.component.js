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
            templateUrl: './app/components/app.component/app.component.html',
            providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
            pipes: [angular2localization_2.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], AppComponent);
    return AppComponent;
}(angular2localization_1.Locale));
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELG9FQUFvRTtBQUNwRSxzQkFBc0I7QUFDdEIsb0JBQWtCLGlDQUFpQyxDQUFDLENBQUE7QUFDcEQsd0JBQW9DLDRCQUE0QixDQUFDLENBQUE7QUFDakUscUJBQWlDLHlCQUF5QixDQUFDLENBQUE7QUFDM0Qsd0JBQXdCLDRCQUE0QixDQUFDLENBQUE7QUFDckQsWUFBWTtBQUNaLHFDQUF5RCwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JHLFNBQVM7QUFDVCxxQ0FBNEIsMkNBQTJDLENBQUMsQ0FBQTtBQXlCeEU7SUFBa0MsZ0NBQU07SUFJcEMsc0JBQVksMkJBQTJCLENBQVEsTUFBcUIsRUFBUyxZQUFpQztRQUMxRyxrQkFBTSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEaUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUcxRyxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsMkJBQTJCO1FBRTNCLGlLQUFpSztRQUNqSyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEQsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MseURBQXlEO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtRQUMxSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7UUFFekUseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRXJCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRXJCLENBQUM7SUFFTCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUVJLGtDQUFrQztJQUV0QyxDQUFDO0lBR0Qsc0JBQUksd0NBQWM7UUFEbEIsNEJBQTRCO2FBQzVCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzQyxDQUFDOzs7T0FBQTtJQUVELGdDQUFnQztJQUNoQyxtQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBdkVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUF3QixTQUFHLEVBQUUsK0JBQXFCLEVBQUUseUJBQWtCLEVBQUUsbUJBQVMsQ0FBQztZQUM5RixXQUFXLEVBQUUsbURBQW1EO1lBQ2hFLFNBQVMsRUFBRSxDQUFDLG9DQUFhLEVBQUUsMENBQW1CLENBQUM7WUFDL0MsS0FBSyxFQUFFLENBQUMsb0NBQWEsQ0FBQztTQUN6QixDQUFDOztvQkFBQTtJQW1FRixtQkFBQztBQUFELENBQUMsQUExREQsQ0FBa0MsNkJBQU0sR0EwRHZDO0FBMURZLG9CQUFZLGVBMER4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7Um91dGVzLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxuaW1wb3J0IHtEaXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jb3JlL3J0bC9kaXInO1xuaW1wb3J0IHtNRF9TSURFTkFWX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xuLy8gU2VydmljZXMuXG5pbXBvcnQge0xvY2FsZSwgTG9jYWxlU2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbi8vIENvbXBvbmVudHMuXG4vKlxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi8uLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0kxOG5Db21wb25lbnR9IGZyb20gJy4uLy4uL2kxOG4uY29tcG9uZW50JztcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtWYWxpZGF0aW9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi92YWxpZGF0aW9uLmNvbXBvbmVudCc7XG4qL1xuZXhwb3J0IHR5cGUgTGF5b3V0RGlyZWN0aW9uID0gJ2x0cicgfCAncnRsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY29tcG9uZW50JyxcbiAgICBkaXJlY3RpdmVzOiBbLypST1VURVJfRElSRUNUSVZFUywqLyBEaXIsIE1EX1NJREVOQVZfRElSRUNUSVZFUywgTURfTElTVF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXJdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50L2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZV0sIC8vIEluaGVyaXRlZCBieSBhbGwgZGVzY2VuZGFudHMuXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXVxufSlcbi8qXG5AUm91dGVzKFtcbiAgICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9pMThuJywgY29tcG9uZW50OiBJMThuQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvdmFsaWRhdGlvbicsIGNvbXBvbmVudDogVmFsaWRhdGlvbkNvbXBvbmVudCB9XG5dKVxuKi9cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgZXh0ZW5kcyBMb2NhbGUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZGlyOiBMYXlvdXREaXJlY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcigvKnByaXZhdGUgcm91dGVyOiBSb3V0ZXIsKi8gcHVibGljIGxvY2FsZTogTG9jYWxlU2VydmljZSwgcHVibGljIGxvY2FsaXphdGlvbjogTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihudWxsLCBsb2NhbGl6YXRpb24pO1xuXG4gICAgICAgIC8vIEFkZHMgYSBuZXcgbGFuZ3VhZ2UgKElTTyA2MzkgdHdvLWxldHRlciBvciB0aHJlZS1sZXR0ZXIgY29kZSkuXG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdlbicpO1xuICAgICAgICB0aGlzLmxvY2FsZS5hZGRMYW5ndWFnZSgnaXQnKTtcbiAgICAgICAgdGhpcy5sb2NhbGUuYWRkTGFuZ3VhZ2UoJ2FyJyk7XG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdlcycpO1xuICAgICAgICAvLyBBZGQgYSBuZXcgbGFuZ3VhZ2UgaGVyZS5cblxuICAgICAgICAvLyBSZXF1aXJlZDogZGVmYXVsdCBsYW5ndWFnZSwgY291bnRyeSAoSVNPIDMxNjYgdHdvLWxldHRlciwgdXBwZXJjYXNlIGNvZGUpIGFuZCBleHBpcnkgKE5vIGRheXMpLiBJZiB0aGUgZXhwaXJ5IGlzIG9taXR0ZWQsIHRoZSBjb29raWUgYmVjb21lcyBhIHNlc3Npb24gY29va2llLlxuICAgICAgICB0aGlzLmxvY2FsZS5kZWZpbmVQcmVmZXJyZWRMb2NhbGUoJ2VuJywgJ1VTJywgMzApO1xuXG4gICAgICAgIC8vIE9wdGlvbmFsOiBkZWZhdWx0IGN1cnJlbmN5IChJU08gNDIxNyB0aHJlZS1sZXR0ZXIgY29kZSkuXG4gICAgICAgIHRoaXMubG9jYWxlLmRlZmluZVByZWZlcnJlZEN1cnJlbmN5KCdVU0QnKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplcyBMb2NhbGl6YXRpb25TZXJ2aWNlOiBhc3luY2hyb25vdXMgbG9hZGluZy5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25Qcm92aWRlcignLi9hcHAvSTE4bi9sb2NhbGUtJyk7IC8vIFJlcXVpcmVkOiBpbml0aWFsaXplcyB0aGUgdHJhbnNsYXRpb24gcHJvdmlkZXIgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBwcmVmaXguXG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uLnVwZGF0ZVRyYW5zbGF0aW9uKCk7IC8vIE5lZWQgdG8gdXBkYXRlIHRoZSB0cmFuc2xhdGlvbi5cblxuICAgICAgICAvLyBJbml0aWFsaXplcyBkaXJlY3Rpb24uXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZS5nZXRDdXJyZW50TGFuZ3VhZ2UoKSA9PSBcImFyXCIpIHtcblxuICAgICAgICAgICAgdGhpcy5kaXIgPSAncnRsJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmRpciA9ICdsdHInO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcblxuICAgIH1cblxuICAgIC8vIEdldHMgdGhlIGN1cnJlbnQgY291bnRyeS5cbiAgICBnZXQgY3VycmVudENvdW50cnkoKTogc3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUuZ2V0Q3VycmVudENvdW50cnkoKTtcblxuICAgIH1cblxuICAgIC8vIFNldHMgYSBuZXcgbG9jYWxlICYgY3VycmVuY3kuXG4gICAgc2VsZWN0TG9jYWxlKGxhbmd1YWdlOiBzdHJpbmcsIGNvdW50cnk6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMubG9jYWxlLnNldEN1cnJlbnRMb2NhbGUobGFuZ3VhZ2UsIGNvdW50cnkpO1xuICAgICAgICB0aGlzLmxvY2FsZS5zZXRDdXJyZW50Q3VycmVuY3koY3VycmVuY3kpO1xuXG4gICAgfVxuXG59Il19