/**
 * Created by eduray on 7/5/16.
 */
import {Component} from '@angular/core';

// Services.
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';
//import {LocaleDecimalPipe, LocalePercentPipe, LocaleCurrencyPipe} from 'angular2localization/angular2localization';


import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormCtrlMessage } from '../../shared/template/form/form.ctrl.message.component';
import { FormValidationService } from '../../shared/service/form/form.validation.service';


@Component({
   template: require('./form.component.html'),
   pipes : [TranslatePipe, LocaleDatePipe],
   directives: [REACTIVE_FORM_DIRECTIVES, FormCtrlMessage]
})

export class FormComponent  extends Locale {

   intlSupport: boolean;
   birthday : Date;
   userForm: any;
   
   constructor(public locale: LocaleService,
               public localization: LocalizationService,
               private formBuilder: FormBuilder) {
      super(locale, localization);

      this.birthday = new Date(1988, 3, 15); // April 15, 1988

      this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
          && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
          && IntlSupport.Collator(this.locale.getCurrentLanguage());

      this.userForm = this.formBuilder.group({
         'name': ['', Validators.required],
         'email': ['', [Validators.required, FormValidationService.emailValidator]],
         'profile': ['', [Validators.required, Validators.minLength(10)]]
      });

   }

   saveUser() {
      if (this.userForm.dirty && this.userForm.valid) {
         alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
      }
   }
}