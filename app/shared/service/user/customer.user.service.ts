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
        this.restService.get("tp-main","user").then(data => this.user = data);
        return this.user;
    }
    //update
    post(user:User):User {
        this.restService.post("tp-main", "user", user).then(data => this.user = data);
        return this.user;
    }
    //create
    put(user:User):User {
        this.restService.put("tp-main","user", user).then(data => this.user = data);
        return this.user;
    }
    
    static getGroupFormBuilder():any{
        return  {
                 name: ['xxxxxxxx', Validators.required],
                 firstName: ['xxxxxxxx', Validators.required],
                 lastName: ['xxxxxxxx', Validators.required],
                 userName: ['xxxxxxxx', Validators.required],
                 email: ['egcabc@gmail.com', [Validators.required, FormValidationService.emailValidator]],
                 pseudonym: ['xxxxxxxx', Validators.required],
                 password: ['xxxxxxxx', Validators.required],
                 password_: ['xxxxxxxx', Validators.required],
                 //countryId: ['xxxxxxxx', Validators.required], //int
                 accountId: ['xxxxxxxx', Validators.required], //int
                 location: ['xxxxxxxx', Validators.required]
                };
    }
}
