import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component } from '@angular/core';
// Beans.
import { Account } from '../../../services/customer/account/account';
import { AccountForm } from '../../../services/customer/account/customer.account.model';
// Services.
import { CustomerAccountService } from '../../../services/customer/account/customer.account.service';

@Component({
	selector: 'sign-up-account',
	template: require('./customer.account.component.html'),
	providers: [CustomerAccountService]
})

export class FormCustomerAccountComponent extends BaseComponent {
	account: Account;
	accountForm: any;
	errorMessage: string;

	constructor(boot: BootstrapService,
	            public customerAccountService: CustomerAccountService) {
		super(boot);
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

	//create
	createAccount(account: Account): void {
		let _service = this;
		_service.customerAccountService.create(account).then(() => {
			_service.auth.login({
				username: account.email,
				password: account.password
			}).then(
				()=> _service.router.navigate(['/home'], '?id:' + account.id),
				(reason: string)=> {
					throw new Error(reason)
				});
		}, () => this.errorMessage = "Error creando cuenta !!");
	}
}
