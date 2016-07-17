import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {RestService} from "../rest.service";
import { Component } from '@angular/core';

//import 'rxjs/add/operator/share';
//import 'rxjs/add/operator/map';

@Injectable()
@Component({
	viewProviders: [RestService],
})
export class AuthService {
	token: string;

	constructor( public rest: RestService) {
		this.token = localStorage.getItem('token');
	}

	login(username: String, password: String): any {
		/*
		 * If we had a login api, we would have done something like this

		 return this.http.post('/auth/login', JSON.stringify({
		 username: username,
		 password: password
		 }), {
		 headers: new Headers({
		 'Content-Type': 'application/json'
		 })
		 })
		 .map((res : any) => {
		 let data = res.json();
		 this.token = data.token;
		 localStorage.setItem('token', this.token);
		 });

		 for the purpose of this cookbook, we will juste simulate that
		 */


		//console.log('from authentication:'+username);
		//console.log(password);

		this.rest.post("tp-main","login", {"username":"admin","password":"password" }).then(
			(result: any)=>console.log(result),
			(reason: string)=>console.log('REJECTED: '+ reason)

		);


		if (username === 'test' && password === 'test') {
			this.token = 'token';
			localStorage.setItem('token', this.token);
			return Observable.of('token');
		}

		return Observable.throw('authentication failure');

	}

	logout() {
		/*
		 * If we had a login api, we would have done something like this

		 return this.http.get(this.config.serverUrl + '/auth/logout', {
		 headers: new Headers({
		 'x-security-token': this.token
		 })
		 })
		 .map((res : any) => {
		 this.token = undefined;
		 localStorage.removeItem('token');
		 });
		 */

		this.token = undefined;
		localStorage.removeItem('token');

		return Observable.of(true);
	}
}