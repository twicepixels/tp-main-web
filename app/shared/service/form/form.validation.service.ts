import { HTTP_PROVIDERS } from '@angular/http';
import { ReflectiveInjector } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { FormValidationResult } from './form.validation.model';
let regex = require('./form.expressions');

export class FormValidationService {

	static creditCardValidator(control: any) {
		// Visa, MasterCard, American Express, Diners Club, Discover, JCB
		if (control.value.match(regex.creditCard)) {
			return null;
		} else {
			return {'invalidCreditCard': true};
		}
	}

	static emailValidator(control: any): Promise<FormValidationResult> {
		//noinspection JSDeprecatedSymbols
		let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS, RestService]);
		let _service = injector.get(RestService);
		if (control.value.match(regex.email)) {
			return new Promise((resolve, reject) => {
				_service.get("tp-main", "userByEmail", {"email": control.value})
					.then((data: any)=> {
						if (!data || data.length === 0) {
							resolve(null);
						} else {
							resolve({'emailAlreadyExist': true});
						}
					}, (reason: any) => {
						reject(reason);
					});
			});
		} else {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({'invalidEmailAddress': true});
				}, 1000)
			});
		}
	}

	static emailStructureValidator(control: any): any {
		if (control.value.match(regex.email)) {
			return null;
		} else {
			return {'invalidEmailAddress': true};
		}
	}


	static passwordValidator(control: any) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(regex.password)) {
			return null;
		} else {
			return {'invalidPassword': true};
		}
	}

	static fieldNumberValidator(control: any) {
		// {6,100}           - Assert password is between 6 and 100 characters
		// (?=.*[0-9])       - Assert a string has at least one number
		if (control.value.match(regex.number)) {
			return null;
		} else {
			return {'invalidFieldNumber': true};
		}
	}
}
