/**
 * Created by Juanjo on 29/09/2016.
 */

import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Pipes.
// Services.
import { CustomerCollaboratorService } from '../../../services/customer/collaborator/customer.collaborator.service';
import { UtilService } from '../../../services/general/util.service';
// Beans.
import { Collaborator } from '../../../services/customer/collaborator/collaborator';
import { CollaboratorForm } from "../../../services/customer/collaborator/customer.collaborator.model";





@Component({
    template: require('./customer.collaborator.component.html'),
    providers: [UtilService, CustomerCollaboratorService]
})



export class FormCustomerCollaboratorComponent extends BaseComponent {
    collaborator: Collaborator;
    collaboratorForm: FormGroup;
    countries: Object[];
    infoMessage: string;
    errorMessage: string;

    constructor(boot: BootstrapService,
                public utilService: UtilService,
                public customerCollaboratorService: CustomerCollaboratorService) {
        super(boot);
        //put forms elements into form builder group
        this.collaboratorForm = this.formBuilder.group(CollaboratorForm);

        if (this.auth.isLoggedIn()) {
            this.utilService.getAllCountries().then((data: any) => {
                this.countries = data;
               // this.fillUserInfo();
            }, (reason: string) => {
                console.log(reason);
            });
        }

    }

   /* fillUserInfo(): void {
        this.customerUserService.meInfo().then(
            (data: any) => {
                this.fillFormGroup(data, this.userForm);
            }, (reason: string) => {
                console.log(reason);
            }
        );
    }*/


    SubmitButtonAction() {
        if (this.collaboratorForm.dirty && this.collaboratorForm.valid) {
            console.log('SubmitButtonAction');
            this.collaborator = this.collaboratorForm.value;
            this.collaborator.accountId = 1;
            this.collaborator.picture = 'foto';
            this.collaborator.authorized = false;
            this.collaborator.rating = 3;
            this.collaborator.countryId = 1;
            this.errorMessage = null;
            this.createCollaborator(this.collaborator);
        }
    }

    //create
    createCollaborator(collaborator: Collaborator): void {
        console.log('createCollaborator');
        //let _service = this;
        this.customerCollaboratorService.create(collaborator).then(
            (data: any) => {
                console.log("colalaborator create : " + data);
                this.updateMessages("Change accepted !!", null);
            }, (reason: string) => {
                console.log(reason);
                this.updateMessages(null, "Error updated !!");
            }
        );
    }


    /*SubmitButtonAction(): any {
        if (this.collaboratorForm.dirty && this.collaboratorForm.valid) {
            // this.user = this.userForm.value;
            let collaborator: Collaborator = this.collaboratorForm.value;
            this.customerCollaboratorService.collaboratorUpdate(collaborator).then(
                (data: any) => {
                    console.log("user updated : " + data);
                    this.updateMessages("Change accepted !!", null);
                }, (reason: string) => {
                    console.log(reason);
                    this.updateMessages(null, "Error updated !!");
                }
            );
        }
    }*/

    updateMessages(infoMessage: string, errorMessage: string) {
        this.infoMessage = null;
        this.errorMessage = null;
        if (infoMessage != null) {
            this.infoMessage = infoMessage;
        }
        if (errorMessage != null) {
            this.errorMessage = errorMessage;
        }
        new Promise(() => {
            setTimeout(() => {
                this.infoMessage = null;
                this.errorMessage = null;
            }, 5000);
        });
    }
}
