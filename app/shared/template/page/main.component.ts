import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// Angular 2 Material.
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {
	Locale,
	TranslatePipe,
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';
// Components
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';
// Services
import { LanguageService } from '../../service/language/language.service';

@Component({
	selector: 'main-application',
	template: require('./main.component.html'),
	directives: [
		MdToolbar,
		NavbarComponent,
		SearchComponent,
		ROUTER_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES
	],
	providers: [
		LocaleService,
		LanguageService,
		LocalizationService
	],
	pipes: [TranslatePipe]
})

export class MainComponent extends Locale implements OnInit {

	constructor(locale: LocaleService,
	            localization: LocalizationService) {
		super(locale, localization);
	}

	ngOnInit() {
		LanguageService.addScope({
			prefix: "locale",
			l10n: this.localization
		});
	}
}