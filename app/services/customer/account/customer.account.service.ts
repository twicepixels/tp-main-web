/**
 * Created by eduray on 7/16/16.
 */
import {Injectable, Inject} from '@angular/core';
import {Account} from './account';
import {RestService} from '../../../shared/service/rest.service';

@Injectable()
export class CustomerAccountService {
    account:Account;
    
    constructor(private restService:RestService){
    }

    //userByEmail
    existsEmail(account:Account):Promise<boolean> {
        let _service = this.restService;
        return new Promise(function (resolve, reject) {
            _service.get("tp-main","userByEmail",{"email":account.email}).then(
                (data: any)=> {
                    resolve( !(data.length === 0) );
                },
                (reason: any) => {
                    reject( reason );
                }
            );
        });
    }

    //create
    post(account:Account):Promise<any> {
        let _service = this.restService;
        return new Promise(function(resolve:any, reject:any){
            _service.post("tp-main","createAccount", account)
                .then(data => {
                    resolve(data);
                },(reason:string) => {
                    reject(reason);
                });
        });
    }
}
