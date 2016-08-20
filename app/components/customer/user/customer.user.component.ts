import { baseProvider, BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
// Pipes.
import { TranslatePipe } from 'angular2localization/angular2localization';
// Services.
import { CustomerUserService } from '../../../services/customer/user/customer.user.service';
import { GeneralCountryService } from '../../../services/general/country/general.country.service';
// Beans.
import { User } from '../../../services/customer/user/user';
import { UserForm } from "../../../services/customer/user/customer.user.model";
import { FormCtrlMessage } from '../../../shared/template/form/form.ctrl.message.component';
import { FormValidationService } from '../../../shared/service/form/form.validation.service';

@Component({
	template: require('./customer.user.component.html'),
	pipes: [TranslatePipe],
	directives: [
		REACTIVE_FORM_DIRECTIVES,
		FormCtrlMessage
	],
	providers: [
		baseProvider,
		CustomerUserService,
		GeneralCountryService
	]
})

export class FormCustomerUserComponent extends BaseComponent {

	user: User;
	userForm: FormGroup;
	infoMessage: string;
	errorMessage: string;
	countries: Object[];

	constructor(boot: BootstrapService,
	            public customerUserService: CustomerUserService,
	            public generalCountryService: GeneralCountryService) {
		super(boot);
		this.infoMessage = null;
		this.errorMessage = null;
		this.userForm = this.formBuilder.group(UserForm);
		if (this.auth.isLoggedIn()) {
			this.user = <User>this.auth.getUserInfo();
			this.getAllCountries();
			this.get(this.user);
		}
	}

	SubmitButtonAction(): any {
		if (this.userForm.dirty && this.userForm.valid) {
			this.user = this.userForm.value;
			this.put(this.user);
		}
	}

	onSelectCountries(countryId: number) {
		this.user.countryId = countryId;
	}

	//get
	get(user: User): void {
		this.customerUserService.get(user).then(
			(data: any) => {
				this.user = data;
				FormValidationService.fillFormGroup(this.user, this.userForm);
			}, (reason: string) => {
				console.log(reason);
			}
		);
	}

	//get
	getAllCountries(): void {
		this.generalCountryService.get().then((data: any) => {
			this.countries = data;
		}, (reason: string) => {
			console.log(reason);
		});
	}

	//update
	put(user: User): void {
		this.customerUserService.put(user).then((data: any) => {
			console.log("user updated : " + data);
			this.updateMessages("Change accepted !!", null);
		}, (reason: string) => {
			console.log(reason);
			this.updateMessages(null, "Error updated !!");
		});
	}

	//create
	post(user: User): void {
		this.user = this.customerUserService.post(user);
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
