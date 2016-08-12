/**
 * Created by Gabriel on 09/08/2016.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';

// Services.
import {CustomerUserService} from '../../../../services/customer/user/customer.user.service';
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';

// Beans.
import {User} from '../../../../services/customer/user/user';
import {FormCtrlMessage} from '../../../../shared/template/form/form.ctrl.message.component.ts';

import { UserForm } from "../../../../services/customer/user/customer.user.model";

@Component({
    template: require('./password.change.component.html'),
    pipes : [TranslatePipe, LocaleDatePipe],
    directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage],
    providers: [CustomerUserService]
})

export class FormChangePasswordComponent  extends Locale  implements OnInit {

    intlSupport: boolean;
    changePasswordForm: any;
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

        this.changePasswordForm = this.formBuilder.group(UserForm);
    }

    accionButtonUserForm() {
        if (this.changePasswordForm.dirty && this.changePasswordForm.valid) {
            let userString:string = JSON.stringify(this.changePasswordForm.value, null, 2);
            this.user = JSON.parse(userString);
        }
    }
    //postChangePass
    post(user:User):User {
        this.user = this.customerUserService.postChangePass(user);
        return this.user;
    }
}


