import { baseProvider, BaseComponent, BootstrapService } from "../shared/base.component";
import { Component } from '@angular/core';
// Services.
import { TranslatePipe } from 'angular2localization/angular2localization';
import { SearchComponent } from "../shared/template/search/search.component";

@Component({
	selector: 'home-section',
	template: require('./home.component.html'),
	directives: [
		SearchComponent
	],
	pipes: [TranslatePipe],
	providers: [baseProvider]
})
export class HomeComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}
}