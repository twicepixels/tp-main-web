import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";


@Injectable()
export class AuthService {
	private infoKey: string = "userinfo";

	constructor(private rest: RestService) {
	}

	login(model: LoginModel): Promise<Object> {
		let _class = this;
		let _service = this.rest;
		return new Promise(function (resolve, reject) {
			// race promise against post
			_service.post("tp-main", "login", model).then(
				(jsonResult: any)=> {
					let jsonStr = JSON.stringify(jsonResult);
					localStorage.setItem(_class.infoKey, jsonStr);
					resolve(jsonResult);
				},
				(reason: any) => {
					localStorage.removeItem(_class.infoKey);
					reject(reason);
				}
			);
		});
		// también se puede devolver el promise
		// sin hacer ningún procesamiento adicional:
		// return this.rest.post("tp-main", "login", model);
	}

	logout(): Promise<any> {
		localStorage.removeItem(this.infoKey);
		return this.rest.post("tp-main", "logout");
	}

	getUserInfo(): Object {
		let str: string = localStorage.getItem(this.infoKey);
		return JSON.parse(str);
	}

	isLoggedIn(): boolean {
		return !!localStorage.getItem(this.infoKey);
	}
}