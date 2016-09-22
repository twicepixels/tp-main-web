import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { Injector, OnInit, Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { LanguageService } from "./service/language/language.service";
import { AuthService } from "./service/auth/auth.service";
@Injectable()
export class BootstrapService {
	constructor(public injector: Injector,
	            public lang: LanguageService) {
	}
}
export let baseProvider = {
	useFactory: (injector: Injector, lang: LanguageService) => new BootstrapService(injector, lang),
	provide: BootstrapService,
	deps: [
		Injector,
		LanguageService,
		Router,
		AuthService,
		FormBuilder
	]
};

export class BaseComponent implements OnInit {
	public injector: Injector;

	router: Router = this.boot.injector.get(Router);
	auth: AuthService = this.boot.injector.get(AuthService);
	formBuilder: FormBuilder = this.boot.injector.get(FormBuilder);

	constructor(@Inject(BootstrapService) protected boot: BootstrapService) {
		this.injector = boot.injector;
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