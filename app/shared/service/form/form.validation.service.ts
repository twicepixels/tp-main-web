/**
 * Created by eduray on 7/5/16.
 */
import { RestService } from '../../service/rest.service';
import { ReflectiveInjector } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { CustomerAccountService } from '../../../services/customer/account/customer.account.service';
import { FormValidationResult } from './form.validation.model';
import { FormGroup, AbstractControl } from '@angular/forms';

export class FormValidationService {

	static fillFormGroup(object: Object, formGroup: FormGroup): void {
		Object.keys(object).forEach(function (property) {
			try {
				let control: AbstractControl = formGroup.controls[property];
				if (control != null) {
					control.setValue((<any>object)[property], {onlySelf: true});
				}
			} catch (error) {
				console.log("error")
			}
		});
	}

	static creditCardValidator(control: any) {
		// Visa, MasterCard, American Express, Diners Club, Discover, JCB
		if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
			return null;
		} else {
			return {'invalidCreditCard': true};
		}
	}


	static emailValidator(control: any): Promise<FormValidationResult> {
		let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS, RestService, CustomerAccountService]);
		let _customerAccountService = injector.get(CustomerAccountService);

		if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
			return new Promise((resolve, reject) => {
				_customerAccountService.existsEmail({"email": control.value}).then(
					(data: any)=> {
						if (data === false) {
							resolve(null);
						} else {
							resolve({'emailAlreadyExist': true});
						}
					},
					(reason: any) => {
						reject(reason);
					}
				);
			});
		} else {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({'invalidEmailAddress': true});
				}, 1000)
			});
		}
	}

	static emailStructureValidator(control: any): any {
		if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
			return null;
		} else {
			return {'invalidEmailAddress': true};
		}
	}


	static passwordValidator(control: any) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
			return null;
		} else {
			return {'invalidPassword': true};
		}
	}

	static fieldNumberValidator(control: any) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(/^[0-9]+$/)) {
			return null;
		} else {
			return {'invalidFieldNumber': true};
		}
	}
}
