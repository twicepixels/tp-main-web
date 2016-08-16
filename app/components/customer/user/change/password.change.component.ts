/**
 * Created by Gabriel on 09/08/2016.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup} from '@angular/forms';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';

// Services.
import {CustomerUserService} from '../../../../services/customer/user/customer.user.service';
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';
import { AuthService } from "../../../../shared/service/auth/auth.service";

// Beans.
import {UserPass, User} from '../../../../services/customer/user/user';
import {FormCtrlMessage} from '../../../../shared/template/form/form.ctrl.message.component.ts';
import { ChangePassForm } from "../../../../services/customer/user/customer.user.model.ts";
import {FormValidationService} from '../../../../shared/service/form/form.validation.service';

@Component({
    template: require('./password.change.component.html'),
    pipes : [TranslatePipe, LocaleDatePipe],
    directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
    providers: [CustomerUserService]
})

export class FormChangePasswordComponent  extends Locale  implements OnInit {

    intlSupport: boolean;
    changePasswordForm: FormGroup;
    userPass: UserPass;
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
        this.changePasswordForm = this.formBuilder.group(ChangePassForm);

        this.infoMessage = null;
        this.errorMessage = null;

        if(this.isAuthenticated()){
            this.get(this.user);
        }
    }

    SubmitButtonAction():any {
        if (this.changePasswordForm.dirty && this.changePasswordForm.valid) {
            this.userPass = this.changePasswordForm.value;
            //let userString:string = JSON.stringify(this.changePasswordForm.value, null, 2);
            //this.userPass = JSON.parse(userString);
            if(this.userPass.newpassword == this.userPass.passwordValidation){
                this.post(this.userPass);
            }else{
                this.updateMessages(null, "Validation Pass Error");
            }
        }else{
            this.updateMessages(null, "Validation Pass Error");
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
            FormValidationService.fillFormGroup(this.userPass, this.changePasswordForm);
        },(reason:string) => {
            console.log(reason);
        });
    }

    //postChangePass
    post(user:UserPass):UserPass {
        this.userPass = this.customerUserService.postChangePass(user).then((data:any) => {
            console.log("user updated : "+ data);
            this.updateMessages("Change accepted !!", null);
        },(reason:string) => {
            console.log(reason);
            this.updateMessages(null, "Error updated !!");
        });
        return this.userPass;
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


