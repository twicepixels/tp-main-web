import { Router } from "@angular/router";
import { Injector, OnInit, Injectable, Inject } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import {
	Locale,
	LocaleService,
	LocalizationService
} from "angular2localization/angular2localization";
import { AuthService } from "./service/auth/auth.service";
import { LanguageService } from "./service/language/language.service";

@Injectable()
export class BootstrapService {
	constructor(public injector: Injector,
	            public locale: LocaleService,
	            public localization: LocalizationService) {
	}
}
export let baseProvider =
{
	useFactory: (injector: Injector, locale: LocaleService,
	             localization: LocalizationService) => {
		return new BootstrapService(injector, locale, localization);
	},
	provide: BootstrapService,
	deps: [
		Injector,
		LocaleService,
		LocalizationService,
		Router,
		AuthService,
		FormBuilder
	]
};

export class BaseComponent extends Locale implements OnInit {
	public injector: Injector;

	router: Router = this.boot.injector.get(Router);
	auth: AuthService = this.boot.injector.get(AuthService);
	formBuilder: FormBuilder = this.boot.injector.get(FormBuilder);

	constructor(@Inject(BootstrapService) private boot: BootstrapService) {
		super(boot.locale, boot.localization);
		this.injector = boot.injector;
	}

	addTranslationScope(scopePrefix: string): void {
		LanguageService.addScope({
			prefix: scopePrefix,
			l10n: this.boot.localization
		});
	}

	isLoggedIn(): boolean {
		return this.auth.isLoggedIn();
	}

	fillFormGroup(object: Object, formGroup: FormGroup): void {
		Object.keys(object).forEach(function (property) {
			try {
				let control: AbstractControl = formGroup.controls[property];
				if (control != null) {
					control.setValue((<any>object)[property], {onlySelf: true});
				}
			} catch (error) {
				console.log("error")
			}
		});
	}

	ngOnInit(): any {
		return undefined;
	}
}