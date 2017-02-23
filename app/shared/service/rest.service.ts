import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
const util = require("util");
let restConfig = require("../config/rest.config.json");

@Injectable()
export class RestService {
	private modules: any = null;

	constructor(private http: Http) {
		this.modules = restConfig["modules"];
	}

	get(module: string, service: string, params?: any): Promise<any> {
		let _url = this.url(module, service, params);
		return this.request(_url, "GET");
	}

	post(module: string, service: string, body?: any, params?: any): Promise<any> {
		let _url = this.url(module, service, params);
		return this.request(_url, "POST", body);
	}

	put(module: string, service: string, body?: any, params?: any): Promise<any> {
		let _url = this.url(module, service, params);
		console.log('url');
		console.log(_url);
		return this.request(_url, "PUT", body);
	}

	del(module: string, service: string, params?: any): Promise<any> {
		let _url = this.url(module, service, params);
		return this.request(_url, "DELETE");
	}

	private request(url: string, verb: string, body?: any): Promise<any> {
		let _request: Observable<Response> = null;
        console.log(body);
		let _bodyStr = JSON.stringify(body);
		let _options = {
			body: _bodyStr || "",
			withCredentials: true,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		if (verb == "GET") {
			_request = this.http.get(url, _options);
		} else if (verb == "POST") {
			_request = this.http.post(url, _bodyStr, _options);
		} else if (verb == "PUT") {
			_request = this.http.put(url, _bodyStr, _options);
		} else if (verb == "DELETE") {
			_request = this.http.delete(url, _options);
		}
		return new Promise(function (resolve, reject) {
			// race promise against post
			_request.toPromise().then((res: Response) => {
				resolve(res.json());
			}).catch((error: any) => {
				reject(error);
			});
		});
	}

	//noinspection JSMethodCanBeStatic
	protected url(module: string, service: string, params?: any): string {
		let _module = this.modules.find((iModule: any)=> {
			return iModule["name"] == module;
		});
		if (_module) {
			let _services = _module["services"];
			let _service = _services.find((iService: any)=> {
				return iService["name"] == service
			});
			let _moduleUrl = _module["url"];
			let _servicePath = _service["path"];
			if (params) {
				Object.keys(params).forEach(key => {
					_servicePath = _servicePath.replace(util
						.format(":%s", key), params[key]);
				});
			}
			return util.format("%s/%s", _moduleUrl, _servicePath);
		}
		return null;
	}
}