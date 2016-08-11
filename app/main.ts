import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Providers
import { enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from "./app.routes";
// Components
import { BootstrapService } from "./shared/base.component";
import { RestService } from './shared/service/rest.service';
import { AuthService } from './shared/service/auth/auth.service';
import { MainComponent } from './shared/template/page/main.component';
import { LanguageService } from "./shared/service/language/language.service";
import { LocalizationService, LocaleService } from "angular2localization/angular2localization";

enableProdMode();
bootstrap(MainComponent, [
	HTTP_PROVIDERS,
	APP_ROUTER_PROVIDERS,
	disableDeprecatedForms(),
	provideForms(),
	AuthService,
	RestService,
	LocaleService,
	LanguageService,
	BootstrapService,
	LocalizationService,
	{provide: LocationStrategy, useClass: HashLocationStrategy}
]).catch(err => console.error(err));