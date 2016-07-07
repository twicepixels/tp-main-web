import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
const util = require("util");
var restConfig = require("../config/rest.config.json");

@Injectable()
export class RestService {
	private modules: any = null;

	constructor(private http: Http) {
		this.modules = restConfig["modules"];
	}

	get(module: string, service: string): Promise<any> {
		let _url = this.url(module, service);
		return this.request(_url, "GET");
	}

	post(module: string, service: string, body: any): Promise<any> {
		let _url = this.url(module, service);
		return this.request(_url, "POST", body);
	}

	put(module: string, service: string, body: any): Promise<any> {
		let _url = this.url(module, service);
		return this.request(_url, "PUT", body);
	}

	del(module: string, service: string): Promise<any> {
		let _url = this.url(module, service);
		return this.request(_url, "DELETE");
	}

	private request(url: string, verb: string, body?: any): Promise<any> {
		let _request: Observable<Response> = null;
		let _service = this;
		let _options = _service.defaultOptions();
		if (verb == "GET") {
			_request = _service.http.get(url, _options);
		} else if (verb == "POST") {
			let _bodyStr = JSON.stringify(body);
			_request = _service.http.post(url, _bodyStr, _options);
		} else if (verb == "PUT") {
			let _bodyStr = JSON.stringify(body);
			_request = _service.http.put(url, _bodyStr, _options);
		} else if (verb == "DELETE") {
			_request = _service.http.delete(url, _options);
		}
		return new Promise(function (resolve, reject) {
			// race promise against post
			_request.toPromise()
				.then((res: Response) => _service.extractData(res, resolve))
				.catch((error: any) => _service.handleError(error, reject));
		});
	}

	//noinspection JSMethodCanBeStatic
	private url(module: string, service: string): string {
		let _module = this.modules.find((imodule: any)=> {
			return imodule["name"] == module;
		});
		if (_module) {
			let _services = _module["services"];
			let _service = _services.find((iservice: any)=> {
				return iservice["name"] == service
			});
			let _moduleUrl = _module["url"];
			let _servicePath = _service["path"];
			return util.format("%s/%s", _moduleUrl, _servicePath);
		}
		return null;
	}

	//noinspection JSMethodCanBeStatic
	private defaultOptions(): RequestOptions {
		return new RequestOptions({
			withCredentials: true,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});
	}

	private extractData(res: Response, resolve: any): Promise<any> {
		return Promise.resolve(res.json()).then
		((result: any)=> resolve(result));
	}

	private handleError(error: any, reject: any): Promise<any> {
		let errMsg = (error.message) ? error.message : error.status ?
			`${error.status} - ${error.statusText}` : 'Server error';
		return Promise.reject(errMsg).then(
			(reason: any)=> reject(reason),
			(reason: any)=> reject(reason)
		);
	}
}