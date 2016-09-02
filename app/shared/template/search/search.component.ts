import { BaseComponent, BootstrapService } from "../../base.component";
import { Category, CATEGORIES } from './category-data';
import { RestService } from "../../service/rest.service";
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'search-bar',
	template: require('./search.component.html'),
	styles: [require('./search.component.less')],
	encapsulation: ViewEncapsulation.None
})

export class SearchComponent extends BaseComponent {

	keywords: string = "";
	categories: Category[];
	private selectedCategory = {};

	constructor(private rest: RestService,
	            boot: BootstrapService) {
		super(boot);
		this.categories = CATEGORIES;
		this.selectedCategory = CATEGORIES[0];
	}

	selectCategory(category: Category) {
		this.selectedCategory = category;
	}

	onSubmit() {
		//TODO: invocar servicio de búsqueda
		if (this.keywords) {
			console.log(this.keywords);
		}

		this.rest.post("tp-main", "users").then(
			(result: any)=>console.log(result),
			(error: any)=>console.log(error)
		);
	}
}