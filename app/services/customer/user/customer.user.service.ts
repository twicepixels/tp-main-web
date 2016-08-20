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
		return this.restService.get("tp-main", "userByUserId",
			{"id": user.id}
		);
	}

	//update
	put(user: User): Promise<User> {
		return this.restService.put("tp-main",
			"updateUserById", user, {
				"id": user.id
			}
		);
	}

	postChangePass(user: UserPass): Promise<any> {
		return this.restService.post("tp-main", "changePassword", user);
	}
}
