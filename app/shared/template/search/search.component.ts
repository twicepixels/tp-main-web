import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import {
	Locale,
	TranslatePipe,
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';

import { Category, CATEGORIES } from './category-data';
import { RestService } from "../../service/rest.service";

@Component({
	selector: 'search-bar',
	template: require('./search.component.html'),
	styles: [require('./search.component.less')],
	encapsulation: ViewEncapsulation.None,
	providers: [RestService],
	pipes: [TranslatePipe]
})

export class SearchComponent extends Locale {

	keywords: string = "";
	categories: Category[];
	private selectedCategory = {};

	constructor(public router: Router,
	            public rest: RestService,
	            public locale: LocaleService,
	            public localization: LocalizationService) {
		super(locale, localization);

		Promise.resolve(CATEGORIES).then((categories: Category[])=> {
			this.categories = categories;
			this.selectedCategory = categories[0];
		});
	}

	selectCategory(category: Category) {
		this.selectedCategory = category;
	}

	onSubmit() {
		//TODO: invocar servicio de búsqueda
		if (this.keywords) {
			console.log(this.keywords);
		}

		this.rest.get("tp-main", "users").then(
			(result: any)=>console.log(result),
			(reason: string)=>console.log('REJECTED: ' + reason)
		);
	}
}