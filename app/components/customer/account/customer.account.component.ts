/**
 * Created by eduray on 7/5/16.
 */
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';

// Services.
import {CustomerAccountService} from '../../../services/customer/account/customer.account.service';
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';

// Beans.
import {Account} from '../../../services/customer/account/account';
import {User} from '../../../services/customer/user/user';

import {FormCtrlMessage} from '../../../shared/template/form/form.ctrl.message.component.ts';

import { AccountForm } from '../../../services/customer/account/customer.account.model';



@Component({
    template: require('./customer.account.component.html'),
    pipes : [TranslatePipe, LocaleDatePipe],
    directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
    providers: [CustomerAccountService]
})

export class FormCustomerAccountComponent  extends Locale{

    intlSupport: boolean;
    accountForm: any;
    account:Account;
    user:User;
    errorMessage:string;
    
    constructor(public locale: LocaleService,
                public localization: LocalizationService,
                public formBuilder: FormBuilder,
                public customerAccountService:CustomerAccountService,
                public router: Router){
        super(locale, localization);


        this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && IntlSupport.Collator(this.locale.getCurrentLanguage());

        //put forms elements into form builder group
        this.accountForm = this.formBuilder.group(AccountForm);


    }

    submit() {
        if (this.accountForm.dirty && this.accountForm.valid) {
            this.account = this.accountForm.value;
            this.errorMessage = null;
            this.account.typeAccountId = 1;
            this.post(this.account);
        }
        
    }
    
    //get
    get(account:Account):Account {
        this.account = this.customerAccountService.get(account);
        return this.account;
    }
    //update
    put(account:Account):Account {
        //this.account = this.customerAccountService.post(account);
        //return this.account;
        return null;
    }
    //create
    post(account:Account):void {
        this.customerAccountService.post(account).then((data:any) => {
            this.router.navigate(['/home'],'?id:'+account.id );
        },(reason:any) => {
            this.errorMessage = "Error creando cuenta !!";
        });
    }
}
