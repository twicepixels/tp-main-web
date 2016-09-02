import { BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
// Components
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'main-application',
	template: require('./main.component.html'),
	directives: [NavbarComponent]
})

export class MainComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}

	ngOnInit() {
		this.addTranslationScope("locale");
	}
}