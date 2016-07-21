/**
 * Created by jquesada on 20/07/16.
 */




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

import {RestService} from "../../service/rest.service";

import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormCtrlMessage } from '../form/form.ctrl.message.component.ts';



/*@Component({
	selector: 'login',
	templateUrl: 'app/shared/template/login/login.component.html',
	pipes: [TranslatePipe],
	providers: [MdRadioDispatcher, AuthService, RestService],
	directives: [MD_CARD_DIRECTIVES, MdRadioButton, MD_INPUT_DIRECTIVES, MdButton]
})*/

@Component({
	template: require('./login.component.html'),
	pipes : [TranslatePipe],
	directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
	providers: [AuthService, RestService]
})
export class LoginComponent extends Locale {

	loginform: any;

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
	            public localization: LocalizationService,
				public formBuilder: FormBuilder,
				public rest: RestService
	) {
		super(locale, localization);
		this.loginform = this.formBuilder.group(AuthService.getGroupFormBuilder());
	}

token = localStorage.getItem('token');

	accionButtonLoginForm() {

		if (this.loginform.dirty && this.loginform.valid) {
			alert(`userName: ${this.loginform.value.userName}\n`+
				`password: ${this.loginform.value.password}`);
		}


		console.log(this.loginform.value.userName);
		this.auth.login(   this.loginform.value.userName , this.loginform.value.password).subscribe
		(
		(token: any) => {
				this.token = token;
				this.router.navigate(['/home']);
			}, () => {
				console.log('dio error');
				this.error = true;
			}
		);

		//console.log("llego"+this.user.username);

		/*
		this.rest.post("tp-main","login", {"username":this.user.username,"password":this.user.password }).then(
			(result: any)=>console.log(result),
			(reason: string)=>console.log('REJECTED: '+ reason)

		); */

	}
}
