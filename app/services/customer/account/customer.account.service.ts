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

    //get
    existsEmail(account:Account):Promise<boolean> {
        let _service = this.restService;
        return new Promise(function (resolve, reject) {
            _service.post("tp-main","userByEmail",{"email":account.email}).then(
                (data: any)=> {
                    if(data.length === 0){
                        resolve(false);
                    }else{
                        resolve(true);
                    }//
                },
                (reason: any) => {
                    reject( reason );
                }
            );
        });

    }
    
    //get
    get(account:Account):any {
        this.restService.post("tp-main","userByEmail",{"email":account.email})
            .then(data => {
                return data;
            },(reason:string) => {
                console.log("Error : " + reason );
            });
        return this.account;
    }
    
    //update
    put(account:Account):Account {
        return null;
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
