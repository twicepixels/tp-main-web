/**
 * Created by eduray on 7/5/16.
 */
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';
import {
	Locale,
	LocaleService,
	TranslatePipe,
	LocaleDatePipe,
	LocalizationService
} from 'angular2localization/angular2localization';
// Beans.
import { Account } from '../../../services/customer/account/account';
import { AccountForm } from '../../../services/customer/account/customer.account.model';
import { FormCtrlMessage } from '../../../shared/template/form/form.ctrl.message.component';
// Services.
import { AuthService } from '../../../shared/service/auth/auth.service';
import { CustomerAccountService } from '../../../services/customer/account/customer.account.service';

@Component({
	selector: 'sign-up-account',
	template: require('./customer.account.component.html'),
	pipes: [TranslatePipe, LocaleDatePipe],
	directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
	providers: [CustomerAccountService]
})

export class FormCustomerAccountComponent extends Locale {
	accountForm: any;
	account: Account;
	errorMessage: string;

	constructor(public locale: LocaleService,
	            public localization: LocalizationService,
	            public formBuilder: FormBuilder,
	            public authService: AuthService,
	            public customerAccountService: CustomerAccountService,
	            public router: Router) {
		super(locale, localization);
		//put forms elements into form builder group
		this.accountForm = this.formBuilder.group(AccountForm);
	}

	submit() {
		if (this.accountForm.dirty && this.accountForm.valid) {
			this.account = this.accountForm.value;
			this.errorMessage = null;
			this.account.typeAccountId = 1;
			this.createAccount(this.account);
		}
	}

	//get
	getAccount(account: Account): Account {
		this.account = this.customerAccountService.get(account);
		return this.account;
	}

	//update
	updateAccount(account: Account): Account {
		//this.account = this.customerAccountService.post(account);
		//return this.account;
		return null;
	}

	//create
	createAccount(account: Account): void {
		let _service = this;
		_service.customerAccountService.post(account).then((data: any) => {
			_service.authService.login({
				username: account.email,
				password: account.password
			}).then((result: any)=> {
					_service.router.navigate(['/home'], '?id:' + account.id);
				},
				(reason: string)=> {
					throw new Error(reason);
				}
			);
		}, (reason: any) => {
			this.errorMessage = "Error creando cuenta !!";
		});
	}
}
