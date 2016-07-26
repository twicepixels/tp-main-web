import 'rxjs/Rx';
import { Injectable, Directive, EventEmitter, ElementRef, NgZone as zone } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";



@Injectable()
export class AuthService {
	private authenticated: boolean = false;

	constructor(private rest: RestService ) {
		this.authenticated = !!localStorage.getItem('token');
	}

	login(model: LoginModel): Promise<Object> {
		let _service = this.rest;
		let thisClass = this;

		return new Promise(function (resolve, reject) {
			// race promise against post
			_service.post("tp-main", "login", model).then(
				(jsonResult: any)=> {					
					console.log("sucess" + thisClass.authenticated);
					localStorage.setItem('token','user');
					thisClass.authenticated = true;
					//Se puede hacer otro procesamiento
					//En este caso no es necesario
					resolve(jsonResult);

				},
				(reason: any) => {
					localStorage.removeItem('token');
					thisClass.authenticated = false;
					console.log("error" + thisClass.authenticated);
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
		localStorage.removeItem('token');
		this.authenticated = false;
		return this.rest.post("tp-main", "logout");
	}


	isLoggedIn():boolean {
		return !!localStorage.getItem('token');
		//return this.authenticated;

	}
}