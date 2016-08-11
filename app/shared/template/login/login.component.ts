import { baseProvider, BaseComponent, BootstrapService } from "../../base.component";
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { LoginForm, LoginModel } from "../../service/auth/auth.model";
import { FormCtrlMessage } from '../form/form.ctrl.message.component.ts';
import { TranslatePipe } from 'angular2localization/angular2localization';

@Component({
	selector: 'sign-in-account',
	template: require('./login.component.html'),
	directives: [
		ROUTER_DIRECTIVES,
		REACTIVE_FORM_DIRECTIVES,
		FormCtrlMessage
	],
	providers: [baseProvider],
	pipes: [TranslatePipe]
})
export class LoginComponent extends BaseComponent {

	loginForm: any;
	error: boolean = false;
	private model: LoginModel;

	constructor(boot: BootstrapService) {
		super(boot);
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
				(jsonResult: any) => this.router.navigate(['/home']),
				(error: any) => {
					this.error = true;
					alert(error.message);
				}
			);
		}
	}
}
