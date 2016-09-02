import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Pipes.
// Services.
import { CustomerUserService } from '../../../services/customer/user/customer.user.service';
// Beans.
import { UserPass } from '../../../services/customer/user/user';
import { ChangePassForm } from "../../../services/customer/user/customer.user.model.ts";

@Component({
	template: require('./password.change.component.html'),
	providers: [CustomerUserService]
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
	}

	SubmitButtonAction(): any {
		if (this.changePasswordForm.dirty && this.changePasswordForm.valid) {
			this.userPass = this.changePasswordForm.value;
			if (this.userPass.newPassword == this.userPass.passwordValidation) {
				this.customerUserService.changePassword(this.userPass).then(
					(data: any) => {
						console.log(data);
						this.updateMessages("Change accepted !!", null);
					},
					(error: any) => this.updateMessages(null, error.message)
				);
			} else {
				this.updateMessages(null, "Validation Pass Error");
			}
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