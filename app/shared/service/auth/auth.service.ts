import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";

@Injectable()
export class AuthService {

	constructor(private rest: RestService) {
		// this.token = localStorage.getItem('token');
	}

	login(model: LoginModel): Promise<Object> {
		let _service = this.rest;
		return new Promise(function (resolve, reject) {
			// race promise against post
			_service.post("tp-main", "login", model).then(
				(jsonResult: any)=> {
					//Se puede hacer otro procesamiento
					//En este caso no es necesario
					resolve(jsonResult);
				},
				(reason: any) => {
					//Se puede hacer otro log
					//En este caso no es necesario
					reject(reason);
				}
			);
		});
		// también se puede devolver el promise
		// sin hacer ningún procesamiento adicional:
		// return this.rest.post("tp-main", "login", model);
	}

	logout(): Promise<any> {
		return this.rest.post("tp-main", "logout");
	}
}