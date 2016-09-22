import { BaseComponent, BootstrapService } from "../shared/base.component";
import { Component } from '@angular/core';

@Component({
	selector: 'home-section',
	template: require('./home.component.html'),
	styles: [require('./home.parallax.less')]
})
export class HomeComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}

	ngOnInit() {
		this.boot.lang.translator.setDefaultLang('en');
	}
}