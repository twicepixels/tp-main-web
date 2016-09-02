import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User, UserPass } from './user';
import { RestService } from '../../../shared/service/rest.service';

@Injectable()
export class CustomerUserService extends RestService {

	constructor(http: Http) {
		super(http);
	}

	//get
	meInfo(): Promise<User> {
		return this.get("tp-main", "me");
	}

	//update
	updateUser(user: User): Promise<User> {
		return this.put("tp-main", "userUpdate", user, {"id": user.id});
	}

	changePassword(user: UserPass): Promise<any> {
		return this.post("tp-main", "userPassword", user);
	}
}
