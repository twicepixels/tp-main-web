import { Language } from "./language";
import { Injectable } from '@angular/core';
import { LANGUAGES } from './languages-data';
import {
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';

export interface TranslateScope {
	prefix: string,
	l10n: LocalizationService
}

@Injectable()
export class LanguageService {
	constructor(public locale: LocaleService,
	            public localization: LocalizationService) {
	}

	private static scopes: TranslateScope[] = [];

	static getLanguages() {
		return Promise.resolve(LANGUAGES);
	}

	static addScope(scope: TranslateScope) {
		Promise.all(LANGUAGES).then((languages: Language[])=>
			languages.map(function (value) {
				scope.l10n.locale.addLanguage(value.id);
			})
		);
		scope.l10n.locale.definePreferredCurrency('USD');
		scope.l10n.locale.definePreferredLocale('en', 'US', 30);
		// Required: initializes the translation provider.
		var provider = "./app/I18n/" + scope.prefix + "-";
		scope.l10n.translationProvider(provider);
		// Need to update the translation.
		scope.l10n.updateTranslation();
		scope.l10n.locale.enableCookie = true;
		this.scopes.push(scope);
	}

	static translate(lang: Language) {
		Promise.all(this.scopes).then((scopes: TranslateScope[])=>
			scopes.forEach(function (scope) {
				scope.l10n.locale.setCurrentCurrency(lang.currency);
				scope.l10n.locale.setCurrentLocale(lang.id, lang.isoCode);
			})
		);
	}

	static getCurrentLang(l10n: LocalizationService) {
		var id = l10n.locale.getCurrentLanguage();
		return Promise.all(LANGUAGES).then((languages: Language[])=>
			languages.find(lang=>lang.id == id)
		);
	}
}