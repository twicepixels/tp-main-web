import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { RestService } from '../../../shared/service/rest.service';

@Injectable()
export class CustomerAccountService extends RestService {

	constructor(http: Http) {
		super(http);
	}

	//userByEmail
	// existsEmail(account:Account):Promise<boolean> {
	//     let _service = this.restService;
	//     return new Promise(function (resolve, reject) {
	//         _service.get("tp-main","userByEmail",{"email":account.email}).then(
	//             (data: any)=> {
	//                 resolve( !(data.length === 0) );
	//             },
	//             (reason: any) => {
	//                 reject( reason );
	//             }
	//         );
	//     });
	// }

	//create
	create(account: Account): Promise<any> {
		return this.post("tp-main", "accountCreate", account);
	}
}
