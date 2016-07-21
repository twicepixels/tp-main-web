import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { RestService } from "../rest.service";
import { LoginModel } from "./auth.model";

@Injectable()
export class AuthService {

	constructor(private rest: RestService) {
		// this.token = localStorage.getItem('token');
	}

	login(model: LoginModel): Promise<any> {
		return this.rest.post("tp-main", "login", model);
	}

	logout(): Promise<any> {
		return this.rest.post("tp-main", "logout");
	}
}