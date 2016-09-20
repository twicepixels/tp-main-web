import { BaseComponent, BootstrapService } from "../shared/base.component";
import { Component } from '@angular/core';
// Services.
import { SearchComponent } from "../shared/template/search/search.component";

@Component({
	selector: 'home-section',
	template: require('./home.component.html'),
	styles: [require('./home.parallax.less')],
	directives: [SearchComponent]
})
export class HomeComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}
}