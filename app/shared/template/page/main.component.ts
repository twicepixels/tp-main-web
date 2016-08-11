import { baseProvider, BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { TranslatePipe } from 'angular2localization/angular2localization';
// Components
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';

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