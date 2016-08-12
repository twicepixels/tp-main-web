/**
 * Created by eduray on 7/16/16.
 */
import {Injectable, Inject} from '@angular/core';
import {User} from './user';
import {RestService} from '../../../shared/service/rest.service';

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
    put(user:User):User {
        this.restService.post("tp-main", "updateUser", user).then(data => this.user = data);
        return this.user;
    }
    //create
    post(user:User):any {
        this.restService.post("tp-main","createUser", user)
            .then(data => {
                console.log(data);
            },(reason:string) => {
                console.log(reason);
            });
        return this.user;
    }

    postChangePass(user:User):any {
        this.restService.post("tp-main","changePassword", user)
            .then(data => {
                console.log(data);
            },(reason:string) => {
                console.log(reason);
            });
        return this.user;
    }
}
