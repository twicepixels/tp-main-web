
import 'rxjs/Rx';
import { Injectable, Directive, EventEmitter, ElementRef, NgZone as zone } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";
import {User} from '../user/user';





@Injectable()
export class AuthService {
	//private authenticated: boolean = false;

	constructor(private rest: RestService ) {
		//this.authenticated = !!localStorage.getItem('userName');
	}

	login(model: LoginModel): Promise<Object> {
		let _service = this.rest;
		//let thisClass = this;
		

		return new Promise(function (resolve, reject) {
			// race promise against post
			_service.post("tp-main", "login", model).then(
				(jsonResult: User)=> {
					console.log("sucess" + jsonResult.userName);
					localStorage.setItem('userName',jsonResult.firstName + ' ' + jsonResult.lastName);
					//thisClass.authenticated = true;
					//Se puede hacer otro procesamiento
					//En este caso no es necesario
					resolve(jsonResult);

				},
				(reason: any) => {
					localStorage.removeItem('userName');
					//thisClass.authenticated = false;

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
		localStorage.removeItem('userName');
		//this.authenticated = false;
		return this.rest.post("tp-main", "logout");
	}


	isLoggedIn():boolean {
		return !!localStorage.getItem('userName');
		//return this.authenticated;

	}
}