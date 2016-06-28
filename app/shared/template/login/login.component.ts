import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services.
import {
	Locale,
	TranslatePipe,
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';
import { AuthService } from "../../service/auth/auth.service";

// Angular 2 Material.
import { MdButton } from '@angular2-material/button';
import { MdRadioButton } from '@angular2-material/radio/radio';
import { MdRadioDispatcher } from '@angular2-material/radio/radio_dispatcher';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: 'login',
	templateUrl: 'app/components/login/login.html',
	pipes: [TranslatePipe],
	providers: [MdRadioDispatcher, AuthService],
	directives: [MD_CARD_DIRECTIVES, MdRadioButton, MD_INPUT_DIRECTIVES, MdButton]
})

export class LoginComponent extends Locale {

	public model = {
		search: ""
	};
	public user = {
		username: "test",
		password: "test"
	};
	error: boolean = false;

	constructor(public router: Router,
	            public auth: AuthService,
	            public locale: LocaleService,
	            public localization: LocalizationService) {
		super(locale, localization);
	}

	onSubmit() {
		this.auth.login(this.user.username, this.user.password).subscribe
		(
			(token: any) => {
				this.router.navigate(['/home']);
			}, () => {
				this.error = true;
			}
		);
	}
}
