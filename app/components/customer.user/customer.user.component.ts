/**
 * Created by eduray on 7/5/16.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';

// Services.
import {CustomerUserService} from '../../shared/service/user/customer.user.service';
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';

// Beans.
import {User} from '../../shared/service/user/user';
import { FormCtrlMessage } from '../../shared/template/form/form.ctrl.message.component.ts';

@Component({
    template: require('./customer.user.component.html'),
    pipes : [TranslatePipe, LocaleDatePipe],
    directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
    providers: [CustomerUserService]
})

export class FormCustomerUserComponent  extends Locale  implements OnInit {

    intlSupport: boolean;
    userForm: any;
    user:User;

    ngOnInit() {
        //console.log(this.route.snapshot.params['id']);
    }


    constructor(public locale: LocaleService,
                public localization: LocalizationService,
                public formBuilder: FormBuilder,
                public route: ActivatedRoute,
                public customerUserService:CustomerUserService) {
        super(locale, localization);

        
        this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && IntlSupport.Collator(this.locale.getCurrentLanguage());

        this.userForm = this.formBuilder.group(CustomerUserService.getGroupFormBuilder());


  
    }

    accionButtonUserForm() {
        if (this.userForm.dirty && this.userForm.valid) {
            let userString:string = JSON.stringify(this.userForm.value, null, 2);
            this.user = JSON.parse(userString);
            //this.get(this.user);
            //this.put(this.user, userString);
        }
        
    }



    //get
    get(user:User):User {
        this.user = this.customerUserService.get(user);
        return this.user;
    }
    //update
    post(user:User):User {
        this.user = this.customerUserService.post(user);
        return this.user;
    }
    //create
    put(user:User, userS:string):void {
        this.user = this.customerUserService.put(user, userS);
    }
}
