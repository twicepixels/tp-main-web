import { BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
// Services
import { Language } from '../../service/language/language';
import { LanguageService } from '../../service/language/language.service';

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
		this.addTranslationScope("locale");
		// After all load languages
		LanguageService.getLanguages()
			.then((languages: Language[])=> this.languages
				= languages);
		LanguageService.getCurrentLang(this.localization)
			.then((lang: Language)=>
				this.selectLocale(lang));
		this.isAuthenticated();
	}

	getCurrentCountry(): string {
		return this.locale.getCurrentCountry();
	}

	selectLocale(language: Language) {
		this.langSelected = language;
		LanguageService.translate(language);
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