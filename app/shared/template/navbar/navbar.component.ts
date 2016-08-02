import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {
	Locale,
	TranslatePipe,
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';
// Services
import { Language } from '../../service/language/language';
import { LanguageService } from '../../service/language/language.service';
import { AuthService } from "../../service/auth/auth.service";

@Component({
	selector: 'nav-bar',
	template: require('./navbar.component.html'),
	directives: [ROUTER_DIRECTIVES],
	providers: [
		LocaleService,
		LanguageService,
		LocalizationService,
		AuthService
	],
	pipes: [TranslatePipe]
})

export class NavbarComponent extends Locale {

	public languages: Language[];
	private langSelected = {};
	private username: string;

	constructor(localization: LocalizationService, public auth: AuthService) {
		super(null, localization);
		LanguageService.addScope({
			prefix: "navbar",
			l10n: this.localization
		});
		// After all load languages
		LanguageService.getLanguages()
			.then((languages: Language[])=> this.languages = languages);
		LanguageService.getCurrentLang(this.localization)
			.then((lang: Language)=> this.selectLocale(lang));

		this.isAuthenticated();
	}

	getCurrentCountry(): string {
		return this.locale.getCurrentCountry();
	}

	selectLocale(language: Language) {
		this.langSelected = language;
		LanguageService.translate(language);
	}

	isAuthenticated(): boolean {
		let usr: any = this.auth.getUserInfo();
		if (usr) {
			this.username = usr['userName'];
		}
		return this.auth.isLoggedIn();
	}

	logout(): void {
		this.auth.logout();
	}
}