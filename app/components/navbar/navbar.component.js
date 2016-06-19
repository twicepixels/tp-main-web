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
var router_1 = require('@angular/router');
// Angular 2 Material.
var dir_1 = require('@angular2-material/core/rtl/dir');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var toolbar_1 = require('@angular2-material/toolbar');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
// Components.
var home_component_1 = require('../temp.component/home.component');
var i18n_component_1 = require('../temp.component/i18n.component');
var list_component_1 = require('../temp.component/list.component');
var validation_component_1 = require('../temp.component/validation.component');
var login_component_1 = require('../login.component/login.component');
var language_service_1 = require('../../services/language.service/language.service');
var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(router, locale, localization, _languageService) {
        _super.call(this, null, localization);
        this.router = router;
        this.locale = locale;
        this.localization = localization;
        this._languageService = _languageService;
        this.langSelected = {};
        this.getLanguages();
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
        } //if
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.getCurrentCountry = function () {
        return this.locale.getCurrentCountry();
    };
    NavbarComponent.prototype.getLanguages = function () {
        var _this = this;
        this._languageService.getLanguages().then(function (languages) { return _this.languages = languages; })
            .then(function () { return _this.selectLocale(_this.languages[0]); });
    };
    NavbarComponent.prototype.selectLocale = function (language) {
        this.langSelected = language;
        this.locale.setCurrentLocale(language.id, language.isoCode);
        this.locale.setCurrentCurrency(language.currency);
        console.log(language);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/components/navbar/navbar.html',
            directives: [router_1.ROUTER_DIRECTIVES, dir_1.Dir, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, toolbar_1.MdToolbar],
            providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, language_service_1.LanguageService],
            pipes: [angular2localization_2.TranslatePipe]
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/i18n', component: i18n_component_1.I18nComponent },
            { path: '/list', component: list_component_1.ListComponent },
            { path: '/validation', component: validation_component_1.ValidationComponent },
            { path: '/login', component: login_component_1.LoginComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, language_service_1.LanguageService])
    ], NavbarComponent);
    return NavbarComponent;
}(angular2localization_1.Locale));
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxFLHNCQUFzQjtBQUN0QixvQkFBa0IsaUNBQWlDLENBQUMsQ0FBQTtBQUNwRCx3QkFBb0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNqRSxxQkFBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUVyRCxZQUFZO0FBQ1oscUNBQXlELDJDQUEyQyxDQUFDLENBQUE7QUFFckcsU0FBUztBQUNULHFDQUE0QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBRXhFLGNBQWM7QUFFZCwrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCwrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCwrQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCxxQ0FBa0Msd0NBQXdDLENBQUMsQ0FBQTtBQUMzRSxnQ0FBNkIsb0NBQW9DLENBQUMsQ0FBQTtBQUVsRSxpQ0FBOEIsa0RBQWtELENBQUMsQ0FBQTtBQXdCakY7SUFBcUMsbUNBQU07SUFPdkMseUJBQW9CLE1BQWMsRUFDZixNQUFxQixFQUNyQixZQUFpQyxFQUNoQyxnQkFBaUM7UUFFakQsa0JBQU0sSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFMN0MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFRdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsTUFB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RUFBRTtZQUMzQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtZQUN2RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7U0FDaEQsQ0FBQzs7dUJBQUE7SUFvRUYsc0JBQUM7QUFBRCxDQUFDLEFBbEVELENBQXFDLDZCQUFNLEdBa0UxQztBQWxFWSx1QkFBZSxrQkFrRTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBBbmd1bGFyIDIgTWF0ZXJpYWwuXG5pbXBvcnQge0Rpcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NvcmUvcnRsL2Rpcic7XG5pbXBvcnQge01EX1NJREVOQVZfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHtNRF9MSVNUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XG5cbi8vIFNlcnZpY2VzLlxuaW1wb3J0IHtMb2NhbGUsIExvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2V9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuLy8gQ29tcG9uZW50cy5cblxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi90ZW1wLmNvbXBvbmVudC9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0kxOG5Db21wb25lbnR9IGZyb20gJy4uL3RlbXAuY29tcG9uZW50L2kxOG4uY29tcG9uZW50JztcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vdGVtcC5jb21wb25lbnQvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtWYWxpZGF0aW9uQ29tcG9uZW50fSBmcm9tICcuLi90ZW1wLmNvbXBvbmVudC92YWxpZGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi5jb21wb25lbnQvbG9naW4uY29tcG9uZW50JztcblxuaW1wb3J0IHtMYW5ndWFnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlfSBmcm9tICcuLi9sYW5ndWFnZS5jb21wb25lbnQvbGFuZ3VhZ2UnO1xuXG5cblxuZXhwb3J0IHR5cGUgTGF5b3V0RGlyZWN0aW9uID0gJ2x0cicgfCAncnRsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEaXIsIE1EX1NJREVOQVZfRElSRUNUSVZFUywgTURfTElTVF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXJdLFxuICAgIHByb3ZpZGVyczogW0xvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UsIExhbmd1YWdlU2VydmljZV0sIC8vIFxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZV1cbn0pXG5cbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9pMThuJywgY29tcG9uZW50OiBJMThuQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvdmFsaWRhdGlvbicsIGNvbXBvbmVudDogVmFsaWRhdGlvbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBleHRlbmRzIExvY2FsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBkaXI6IExheW91dERpcmVjdGlvbjtcbiAgICBcbiAgICBwdWJsaWMgbGFuZ3VhZ2VzIDogTGFuZ3VhZ2VbXTtcbiAgICBwcml2YXRlIGxhbmdTZWxlY3RlZCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2xhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7IFxuICAgICAgICBcbiAgICAgICAgc3VwZXIobnVsbCwgbG9jYWxpemF0aW9uKTtcbiAgICAgICAgdGhpcy5nZXRMYW5ndWFnZXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZHMgYSBuZXcgbGFuZ3VhZ2UgKElTTyA2MzkgdHdvLWxldHRlciBvciB0aHJlZS1sZXR0ZXIgY29kZSkuXG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdlbicpO1xuICAgICAgICB0aGlzLmxvY2FsZS5hZGRMYW5ndWFnZSgnaXQnKTtcbiAgICAgICAgdGhpcy5sb2NhbGUuYWRkTGFuZ3VhZ2UoJ2FyJyk7XG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdlcycpO1xuICAgICAgICAvLyBBZGQgYSBuZXcgbGFuZ3VhZ2UgaGVyZS5cblxuICAgICAgICAvLyBSZXF1aXJlZDogZGVmYXVsdCBsYW5ndWFnZSwgY291bnRyeSAoSVNPIDMxNjYgdHdvLWxldHRlciwgdXBwZXJjYXNlIGNvZGUpIGFuZCBleHBpcnkgKE5vIGRheXMpLiBJZiB0aGUgZXhwaXJ5IGlzIG9taXR0ZWQsIHRoZSBjb29raWUgYmVjb21lcyBhIHNlc3Npb24gY29va2llLlxuICAgICAgICB0aGlzLmxvY2FsZS5kZWZpbmVQcmVmZXJyZWRMb2NhbGUoJ2VuJywgJ1VTJywgMzApO1xuXG4gICAgICAgIC8vIE9wdGlvbmFsOiBkZWZhdWx0IGN1cnJlbmN5IChJU08gNDIxNyB0aHJlZS1sZXR0ZXIgY29kZSkuXG4gICAgICAgIHRoaXMubG9jYWxlLmRlZmluZVByZWZlcnJlZEN1cnJlbmN5KCdVU0QnKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplcyBMb2NhbGl6YXRpb25TZXJ2aWNlOiBhc3luY2hyb25vdXMgbG9hZGluZy5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25Qcm92aWRlcignLi9hcHAvSTE4bi9sb2NhbGUtJyk7IC8vIFJlcXVpcmVkOiBpbml0aWFsaXplcyB0aGUgdHJhbnNsYXRpb24gcHJvdmlkZXIgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBwcmVmaXguXG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uLnVwZGF0ZVRyYW5zbGF0aW9uKCk7IC8vIE5lZWQgdG8gdXBkYXRlIHRoZSB0cmFuc2xhdGlvbi5cblxuICAgICAgICAvLyBJbml0aWFsaXplcyBkaXJlY3Rpb24uXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZS5nZXRDdXJyZW50TGFuZ3VhZ2UoKSA9PSBcImFyXCIpIHtcblxuICAgICAgICAgICAgdGhpcy5kaXIgPSAncnRsJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmRpciA9ICdsdHInO1xuXG4gICAgICAgIH0vL2lmXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgfVxuICAgIFxuICAgIGdldEN1cnJlbnRDb3VudHJ5KCk6c3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUuZ2V0Q3VycmVudENvdW50cnkoKTtcblxuICAgIH1cbiAgICBcbiAgICBnZXRMYW5ndWFnZXMoKXtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VTZXJ2aWNlLmdldExhbmd1YWdlcygpLnRoZW4oKGxhbmd1YWdlczpMYW5ndWFnZVtdKT0+IHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB0aGlzLnNlbGVjdExvY2FsZSggdGhpcy5sYW5ndWFnZXNbMF0pICk7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdExvY2FsZShsYW5ndWFnZTpMYW5ndWFnZSkge1xuICAgICAgICB0aGlzLmxhbmdTZWxlY3RlZCA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLmxvY2FsZS5zZXRDdXJyZW50TG9jYWxlKGxhbmd1YWdlLmlkLCBsYW5ndWFnZS5pc29Db2RlKTtcbiAgICAgICAgdGhpcy5sb2NhbGUuc2V0Q3VycmVudEN1cnJlbmN5KGxhbmd1YWdlLmN1cnJlbmN5KTtcbiAgICAgICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=