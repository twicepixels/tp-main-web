import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";


@Injectable()
export class RestService {

	constructor(private http: Http) {
	}

	post(module: string, service: string, body: any): Promise<Response> {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		options.withCredentials = true;

		var _http = this.http;
		var url = module + service;
		var bodyStr = JSON.stringify(body);

		return new Promise(function (fulfill, reject) {
			var promise = _http.post(url, bodyStr, options).toPromise();
			// race promise against post
			promise.then((res: Response) => {
				Promise.resolve(res.json()).then
				((result: any)=> fulfill(result));
			}).catch((error: any)=> {
				let errMsg = (error.message) ? error.message : error.status ?
					`${error.status} - ${error.statusText}` : 'Server error';
				Promise.reject(errMsg).then(
					(reason: any)=> reject(reason),
					(reason: any)=> reject(reason)
				);
			});
		});


		// return
		// .
		// 	then((res: Response) => {
		// 	// console.log(res.json() || {});
		//
		// 	// return Promise.resolve(res.json());
		//
		// });
		// .catch((error: any)=> {
		// 	let errMsg = (error.message) ? error.message : error.status ?
		// 		`${error.status} - ${error.statusText}` : 'Server error';
		// 	// console.error(errMsg); // log to console instead
		// 	return Promise.reject(errMsg)
		// 		.then(function (reason) {
		//
		// 			console.log(reason);
		//
		// 		}, function (reason) {
		//
		// 			console.log(reason);
		//
		// 		});
		// });

	}
}