/**
 * Created by eduray on 7/16/16.
 */
import {Injectable, Inject} from '@angular/core';
import {Validators} from '@angular/forms';
import {FormValidationService} from '../form/form.validation.service.ts';
import {User} from './user';
import {RestService} from '../rest.service';

@Injectable()
export class CustomerUserService {
    user:User;
    
    constructor(@Inject (RestService) private restService:RestService){
    }

    //get
    get(user:User):User {
        this.restService.post("tp-main","userByUserName",{"username":user.userName})
            .then(data => {
                console.log(data);
            },(reason:string) => {
                console.log("Error : " + reason );
            });
        return this.user;
    }
    //update
    post(user:User):User {
        this.restService.post("tp-main", "updateUser", user).then(data => this.user = data);
        return this.user;
    }
    //create
    put(user:User):any {
        this.restService.post("tp-main","createUser", user)
            .then(data => {
                console.log(data);
            },(reason:string) => {
                console.log(reason);
            });
        return this.user;
    }
    
    static getGroupFormBuilder():any{
        return  {
                 id: ['8', Validators.required],
                 firstName: ['user', Validators.required],
                 lastName: ['user', Validators.required],
                 userName: ['user', Validators.required],
                 email: ['tp11@gmail.com', [Validators.required, FormValidationService.emailValidator]],
                 pseudonym: ['edu', Validators.required],
                 password: ['p$2a$10$0WN4nPJbX7DgXd5I3zAdBuiohh/jIs0EVzgAYgLwHuRVzcAvP.5Be', Validators.required],
                 password_: ['pass_ value', Validators.required],
                 countryId: ['123', Validators.required], //int
                 accountId: ['1', [Validators.required, FormValidationService.fieldNumberValidator]], //int
                 location: ['1', Validators.required]
                };
    }
}
