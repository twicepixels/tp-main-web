import { Component } from '@angular/core';
// Angular 2 Material.
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// Services.
import {
	Locale,
	IntlSupport,
	TranslatePipe,
	LocaleService,
	LocaleDatePipe,
	LocaleDecimalPipe,
	LocalePercentPipe,
	LocaleCurrencyPipe,
	LocalizationService,
} from 'angular2localization/angular2localization';
import { SearchComponent } from "../shared/template/search/search.component";

@Component({
	template: require('./home.component.html'),
	pipes: [
		TranslatePipe,
		LocaleDatePipe,
		LocaleDecimalPipe,
		LocalePercentPipe,
		LocaleCurrencyPipe
	],
	directives: [
		MD_CARD_DIRECTIVES,
		SearchComponent
	]
})

export class HomeComponent extends Locale {
	constructor(public locale: LocaleService, public localization: LocalizationService) {
		super(locale, localization);
	}
}