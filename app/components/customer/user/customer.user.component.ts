import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Pipes.
// Services.
import { CustomerUserService } from '../../../services/customer/user/customer.user.service';
import { UtilService } from '../../../services/general/util.service';
// Beans.
import { User } from '../../../services/customer/user/user';
import { UserForm } from "../../../services/customer/user/customer.user.model";

@Component({
	template: require('./customer.user.component.html'),
	providers: [UtilService, CustomerUserService]
})

export class FormCustomerUserComponent extends BaseComponent {

	userForm: FormGroup;
	infoMessage: string;
	errorMessage: string;
	countries: Object[];

	constructor(boot: BootstrapService,
	            public utilService: UtilService,
	            public customerUserService: CustomerUserService) {
		super(boot);
		this.infoMessage = null;
		this.errorMessage = null;
		this.userForm = this.formBuilder.group(UserForm);
		if (this.auth.isLoggedIn()) {
			this.utilService.getAllCountries().then((data: any) => {
				this.countries = data;
				this.fillUserInfo();
			}, (reason: string) => {
				console.log(reason);
			});
		}
	}

	fillUserInfo(): void {
		this.customerUserService.meInfo().then(
			(data: any) => {
				this.fillFormGroup(data, this.userForm);
			}, (reason: string) => {
				console.log(reason);
			}
		);
	}

	SubmitButtonAction(): any {
		if (this.userForm.dirty && this.userForm.valid) {
			// this.user = this.userForm.value;
			let user: User = this.userForm.value;
			this.customerUserService.updateUser(user).then(
				(data: any) => {
					console.log("user updated : " + data);
					this.updateMessages("Change accepted !!", null);
				}, (reason: string) => {
					console.log(reason);
					this.updateMessages(null, "Error updated !!");
				}
			);
		}
	}

	updateMessages(infoMessage: string, errorMessage: string) {
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
