/**
 * Created by eduray on 7/5/16.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup} from '@angular/forms';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';

// Services.
import {CustomerUserService} from '../../../services/customer/user/customer.user.service';
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';
import { AuthService } from "../../../shared/service/auth/auth.service";

// Beans.
import {User} from '../../../services/customer/user/user';
import {FormCtrlMessage} from '../../../shared/template/form/form.ctrl.message.component.ts';

import { UserForm } from "../../../services/customer/user/customer.user.model";
//import { UserFormClass } from "../../../services/customer/user/customer.user.model";
import {FormValidationService} from '../../../shared/service/form/form.validation.service';

@Component({
    template: require('./customer.user.component.html'),
    pipes : [TranslatePipe, LocaleDatePipe],
    directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
    providers: [CustomerUserService, AuthService]
})

export class FormCustomerUserComponent  extends Locale  implements OnInit {

    intlSupport: boolean;
    userForm: FormGroup;
    user:User;
    infoMessage:string;
    errorMessage:string;

    ngOnInit() {
        //console.log(this.route.snapshot.params['id']);
    }
    
    constructor(public locale: LocaleService,
                public localization: LocalizationService,
                public formBuilder: FormBuilder,
                public route: ActivatedRoute,
                public customerUserService:CustomerUserService,
                public auth:AuthService) {
        super(locale, localization);


        this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && IntlSupport.Collator(this.locale.getCurrentLanguage());
        this.userForm = this.formBuilder.group(UserForm);

        this.infoMessage = null;
        this.errorMessage = null;

        this.isAuthenticated()
        {
          this.get(this.user);
        }
    }

    SubmitButtonAction():any {
        if (this.userForm.dirty && this.userForm.valid) {
            this.user = this.userForm.value;
            this.put(this.user);
        }
        
    }

    isAuthenticated(): boolean {
        this.user = <User>this.auth.getUserInfo();
        return this.auth.isLoggedIn();
    }

    //get
    get(user:User):void {
        this.customerUserService.get(user).then((data:any) => {
            this.user = data;
            FormValidationService.fillFormGroup(this.user, this.userForm);
        },(reason:string) => {
            console.log(reason);
        });
    }

    //update
    put(user:User):void {
        this.customerUserService.put(user).then((data:any) => {
            console.log("user updated : "+ data);
            this.updateMessages("Change accepted !!", null);
        },(reason:string) => {
            console.log(reason);
            this.updateMessages(null, "Error updated !!");
        });
    }
    //create
    post(user:User):void {
        this.user = this.customerUserService.post(user);
    }

    updateMessages(infoMessage:string, errorMessage:string){
        this.infoMessage = null;
        this.errorMessage = null;
        if(infoMessage != null){
            this.infoMessage = infoMessage;
        }
        if(errorMessage != null){
            this.errorMessage = errorMessage;
        }
        let promise = new Promise(resolve => {
            setTimeout(() => {
                this.infoMessage = null;
                this.errorMessage = null;
            }, 5000);

        });
    }


}
