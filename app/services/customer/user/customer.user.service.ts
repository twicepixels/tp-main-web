import { Injectable } from '@angular/core';
import { User, UserPass } from './user';
import { RestService } from '../../../shared/service/rest.service';

@Injectable()
export class CustomerUserService {

	constructor(private restService: RestService) {
	}

	//get
	meInfo(): Promise<User> {
		return this.restService.get("tp-main", "me");
	}

	//update
	updateUser(user: User): Promise<User> {
		return this.restService.put("tp-main", "updateUserById", user, {"id": user.id});
	}

	postChangePass(user: UserPass): Promise<any> {
		return this.restService.post("tp-main", "changePassword", user);
	}
}
