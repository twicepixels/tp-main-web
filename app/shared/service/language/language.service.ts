import { Injectable } from '@angular/core';
import { Language } from "./language";
import { LANGUAGES } from './languages-data';
import { TranslateService } from "ng2-translate/ng2-translate";

@Injectable()
export class LanguageService {
	public languages = LANGUAGES;
	private infoKey: string = "lang";

	constructor(public translator: TranslateService) {
	}

	translate(lang: Language) {
		this.translator.use(lang.id);
		localStorage.setItem(this.infoKey, lang.id);
	}

	getCurrentLang() {
		return Promise.all(LANGUAGES).then((languages: Language[])=> {
			let id = localStorage.getItem(this.infoKey);
			let _lang = languages.find(lang=>lang.id == id);
			return _lang || languages[0];
		});
	}
}