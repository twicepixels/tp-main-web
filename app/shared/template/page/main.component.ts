import { BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';

@Component({
	selector: 'main-application',
	template: require('./main.component.html')
})
export class MainComponent extends BaseComponent {
	constructor(boot: BootstrapService) {
		super(boot);
	}
}