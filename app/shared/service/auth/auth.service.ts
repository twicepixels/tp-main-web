import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";


@Injectable()
export class AuthService extends RestService {
	private infoKey: string = "userInfo";

	constructor(http: Http) {
		super(http);
	}

	login(model: LoginModel): Promise<Object> {
		let _class = this;
		return new Promise(function (resolve, reject) {
			_class.post("tp-main", "login", model).then(
				(jsonResult: any)=> {
					let jsonStr = JSON.stringify(jsonResult);
					localStorage.setItem(_class.infoKey, jsonStr );
					resolve(jsonResult);
				},
				(reason: any) => {
					localStorage.removeItem(_class.infoKey);
					reject(reason);
				}
			);
		});
	}

	logout(): Promise<any> {
		localStorage.removeItem(this.infoKey);
		return this.post("tp-main", "logout");
	}

	getUserInfo(): Object {
		let str: string = localStorage.getItem(this.infoKey);
		return JSON.parse(str);
	}

	isLoggedIn(): boolean {
		return !!localStorage.getItem(this.infoKey);
	}
}