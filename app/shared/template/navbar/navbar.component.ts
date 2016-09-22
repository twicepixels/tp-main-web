import { BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
import { Language } from '../../service/language/language';
@Component({
	selector: 'nav-bar',
	template: require('./navbar.component.html'),
	styles: [require('./navbar.component.less')]
})
export class NavbarComponent extends BaseComponent {
	public languages: Language[];
	private langSelected = {};
	private username: string;

	constructor(boot: BootstrapService) {
		super(boot);
		this.languages = boot.lang.languages;
		boot.lang.getCurrentLang().then(
			(lang: Language)=> this.selectLocale(lang)
		);
		this.isAuthenticated();
	}

	selectLocale(language: Language) {
		this.langSelected = language;
		this.boot.lang.translate(language);
	}

	isAuthenticated(): boolean {
		let usr: any = this.auth.getUserInfo();
		if (usr) {
			this.username = usr['userName'];
		}
		return this.auth.isLoggedIn();
	}

	logout(): void {
		this.auth.logout().then(
			(jsonResult: any) => this.router.navigate(['/home']),
			(error: any) => alert(error.message)
		);
	}
}