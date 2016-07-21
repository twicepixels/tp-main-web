import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {RestService} from "../rest.service";
import {Validators} from '@angular/forms';


import { Component } from '@angular/core';

//import 'rxjs/add/operator/share';
//import 'rxjs/add/operator/map';

@Injectable()
export class AuthService  {
	token: string;

	constructor(private rest: RestService) {
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
		console.log('servicio '+password);

		return this.rest.post("tp-main","login", {"username":username,"password":password }).then(
			(result: any)=> {
				console.log(result);
				this.token = 'token';
				localStorage.setItem('token', this.token);
				return Observable.of('token');
			},
			(reason: string)=> {
				console.log('REJECTED: '+ reason);
				return Observable.throw('authentication failure');
			}

		);


		/*
		if (username === 'test' && password === 'test') {
			this.token = 'token';
			localStorage.setItem('token', this.token);
			return Observable.of('token');
		}*/
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

	static getGroupFormBuilder():any{
		return  {			
			userName: ['xxxx', Validators.required],
			password: ['xxxx', Validators.required]
		};
	}
	
}