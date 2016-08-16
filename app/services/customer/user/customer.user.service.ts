/**
 * Created by eduray on 7/16/16.
 */
import { Injectable, Inject } from '@angular/core';
import { User, UserPass } from './user';
import { RestService } from '../../../shared/service/rest.service';

@Injectable()
export class CustomerUserService {
	user: User;

	constructor(@Inject(RestService) private restService: RestService) {
	}

	//get
	get(user: User): Promise<User> {
		let _service = this.restService;
		return new Promise(function (resolve, reject) {
			_service.get("tp-main", "userByUserId", {"id": user.id}).then(
				(data: any)=> {
					resolve(data);
				},
				(reason: any) => {
					reject(reason);
				}
			);
		});
	}

	//update
	put(user: User): Promise<User> {
		let _service = this.restService;
		return new Promise(function (resolve, reject) {
			_service.put("tp-main", "updateUserById", user, {"id": user.id}).then(
				(data: any)=> {
					resolve(data);
				},
				(reason: any) => {
					reject(reason);
				}
			);
		});
	}

	//create
	post(user: User): any {
		this.restService.post("tp-main", "createUser", user)
			.then(data => {
				console.log(data);
			}, (reason: string) => {
				console.log(reason);
			});
		return this.user;
	}

	postChangePass(user: UserPass): Promise<any> {
		return this.restService.post("tp-main", "changePassword", user);
	}
}
