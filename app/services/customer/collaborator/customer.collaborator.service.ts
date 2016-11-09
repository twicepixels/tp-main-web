/**
 * Created by Juanjo on 27/09/2016.
 */

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Collaborator } from './collaborator';
import { RestService } from '../../../shared/service/rest.service';

@Injectable()
export class CustomerCollaboratorService extends RestService {

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
    create(collaborator: Collaborator): Promise<any> {
        return this.post("tp-main", "collaboratorCreate", collaborator);
    }

    collaboratorUpdate(collaborator: Collaborator): Promise<Collaborator> {
        console.log('service --> '+ collaborator.id);
        return this.put("tp-main", "collaboratorUpdate", collaborator, {"id": collaborator.id});
    }

    //get
    getById(id: number): Promise<Collaborator> {
        return this.get("tp-main", "collaboratorGetById", {"id": id});
    }

    //getAll
    getAll(criteria: any): Promise<Collaborator> {

        return this.post("tp-main", "collaboratorGetAll", criteria);
    }

}