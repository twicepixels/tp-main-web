import { baseProvider, BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslatePipe } from 'angular2localization/angular2localization';
// Components
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'main-application',
	template: require('./main.component.html'),
	directives: [
		NavbarComponent,
		ROUTER_DIRECTIVES,
	],
	providers: [baseProvider],
	pipes: [TranslatePipe]
})

export class MainComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}

	ngOnInit() {
		this.addTranslationScope("locale");
	}
}