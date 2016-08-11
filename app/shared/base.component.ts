import { Router } from "@angular/router";
import { Injector } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
	Locale,
	LocaleService,
	LocalizationService
} from "angular2localization/angular2localization";
import { AuthService } from "./service/auth/auth.service";
import { LanguageService } from "./service/language/language.service";


export let baseProvider =
{
	useFactory: (locale: LocaleService,
	             localization: LocalizationService) => {
		return new LanguageService(locale, localization);
	},
	provide: LanguageService,
	deps: [
		LocaleService,
		LocalizationService,
		Router,
		AuthService,
		FormBuilder
	]
};

export class BaseComponent extends Locale {
	router: Router = this.injector.get(Router);
	auth: AuthService = this.injector.get(AuthService);
	formBuilder: FormBuilder = this.injector.get(FormBuilder);

	constructor(public injector: Injector,
	            public langService: LanguageService) {
		super(langService.locale, langService.localization);
	}

	isLoggedIn(): boolean {
		return this.auth.isLoggedIn();
	}
}