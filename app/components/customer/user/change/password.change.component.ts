import { baseProvider, BaseComponent, BootstrapService } from "../../../../shared/base.component";
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
// Pipes.
import { TranslatePipe } from 'angular2localization/angular2localization';
// Services.
import { CustomerUserService } from '../../../../services/customer/user/customer.user.service';
import { FormValidationService } from "../../../../shared/service/form/form.validation.service";
// Beans.
import { UserPass } from '../../../../services/customer/user/user';
import { ChangePassForm } from "../../../../services/customer/user/customer.user.model.ts";
import { FormCtrlMessage } from '../../../../shared/template/form/form.ctrl.message.component.ts';

@Component({
	template: require('./password.change.component.html'),
	pipes: [TranslatePipe],
	directives: [
		ROUTER_DIRECTIVES,
		REACTIVE_FORM_DIRECTIVES,
		FormCtrlMessage
	],
	providers: [baseProvider, CustomerUserService, FormValidationService]
})

export class FormChangePasswordComponent extends BaseComponent {

	userPass: UserPass;
	infoMessage: string;
	errorMessage: string;
	changePasswordForm: FormGroup;

	constructor(boot: BootstrapService,
	            public customerUserService: CustomerUserService) {
		super(boot);
		this.changePasswordForm = this.formBuilder.group(ChangePassForm);
		this.infoMessage = null;
		this.errorMessage = null;
		// if (this.isLoggedIn()) {
		// 	let userInfo = this.auth.getUserInfo();
		// 	FormValidationService.fillFormGroup
		// 	(userInfo, this.changePasswordForm);
		// }
	}

	SubmitButtonAction(): any {
		if (this.changePasswordForm.dirty && this.changePasswordForm.valid) {
			this.userPass = this.changePasswordForm.value;
			if (this.userPass.newPassword == this.userPass.passwordValidation) {
				this.customerUserService.postChangePass(this.userPass).then(
					(data: any) => {
						console.log(data);
						this.updateMessages("Change accepted !!", null);
					},
					(error: any) => this.updateMessages(null, error.message)
				);
			} else {
				this.updateMessages(null, "Validation Pass Error");
			}
			console.log("Hi");
		}
	}

	updateMessages(infoMessage: string, errorMessage: string): void {
		this.infoMessage = null;
		this.errorMessage = null;
		if (infoMessage != null) {
			this.infoMessage = infoMessage;
		}
		if (errorMessage != null) {
			this.errorMessage = errorMessage;
		}
		new Promise(() => {
			setTimeout(() => {
				this.infoMessage = null;
				this.errorMessage = null;
			}, 5000);
		});
	}
}