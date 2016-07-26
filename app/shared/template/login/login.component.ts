import { Router } from '@angular/router';
import { Component } from '@angular/core';
// Services.
import {
	Locale,
	TranslatePipe,
	LocaleService,
	LocalizationService
} from 'angular2localization/angular2localization';
import { AuthService } from "../../service/auth/auth.service";
import { LoginForm, LoginModel } from "../../service/auth/auth.model";
import { REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';
import { FormCtrlMessage } from '../form/form.ctrl.message.component.ts';

@Component({
	template: require('./login.component.html'),
	directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
	providers: [AuthService],
	pipes: [TranslatePipe]
})
export class LoginComponent extends Locale {

	loginForm: any;
	private model: LoginModel;

	error: boolean = false;

	constructor(public router: Router,
	            public auth: AuthService,
	            public locale: LocaleService,
	            public localization: LocalizationService,
	            public formBuilder: FormBuilder) {
		super(locale, localization);

		this.loginForm = this.formBuilder.group(LoginForm);
	}

	onSubmit() {
		if (this.loginForm.dirty && this.loginForm.valid) {
			//se puede mapear directamente al object de
			// tipo LoginModel siempre y cuando los
			// nombres de los atributos sean iguales
			this.model = this.loginForm.value;
			// invocar el servicio y procesar la respuesta
			this.auth.login(this.model).then(
				(jsonResult: Object) => {
					//en lugar de any o Object podría recibir un model Ej: User
					//no 100% necesario ya que el json puede procesarce igual
					console.log(jsonResult);
					alert("LOGIN SUCCESSFUL");
					this.router.navigate(['/home'],'?id:1' );
				}, (reason: Object) => {
					this.error = true;
					console.log(reason);
					alert("LOGIN FAILED");
					this.router.navigate(['/home'],'?id:1' );
				}
			);
		}
	}
}
