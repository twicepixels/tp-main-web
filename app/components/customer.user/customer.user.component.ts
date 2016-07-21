/**
 * Created by eduray on 7/5/16.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    modal:string;
    user:User;

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
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
            alert(`Name: ${this.userForm.value.name}\n`+
            `userName: ${this.userForm.value.userName}\n`+
                `email: ${this.userForm.value.email}\n`+
           `firstName: ${this.userForm.value.firstName}\n`+
            `lastName: ${this.userForm.value.lastName}\n`+
           `pseudonym: ${this.userForm.value.pseudonym}\n`+
            `password: ${this.userForm.value.password}\n`+
            //alert(`countryId: ${this.userForm.value.countryId}\n`+
            `accountId: ${this.userForm.value.accountId}\n`+
            `location: ${this.userForm.value.location}`);
        }
    }

    setFormUserValues(){
        this.userForm.value.name = this.user.name;
        this.userForm.value.userName = this.user.userName;
        this.userForm.value.email = this.user.email;
        this.userForm.value.firstName = this.user.firstName;
        this.userForm.value.lastName = this.user.lastName;
        this.userForm.value.pseudonym = this.user.pseudonym;
        this.userForm.value.password = this.user.password;
        this.userForm.value.countryId = this.user.countryId;
        this.userForm.value.accountId = this.user.accountId;
        this.userForm.value.location = this.user.location;
    }

    getFormUserValues(){
        if (this.userForm.dirty && this.userForm.valid) {
            this.user.name = this.userForm.value.name;
            this.user.userName = this.userForm.value.userName;
            this.user.email = this.userForm.value.email;
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.pseudonym = this.userForm.value.pseudonym;
            this.user.password = this.userForm.value.password;
            this.user.countryId = this.userForm.value.countryId;
            this.user.accountId = this.userForm.value.accountId;
            this.user.location = this.userForm.value.location;
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
    put(user:User):User {
        this.user = this.customerUserService.put(user);
        return this.user;
    }
}