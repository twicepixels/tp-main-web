/**
 * Created by eduray on 7/29/16.
 */
import {Validators} from '@angular/forms';
import {FormValidationService} from '../../../shared/service/form/form.validation.service';


export const UserForm: any = {
               id: ['', Validators.required],
        firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         userName: ['', Validators.required],
            email: ['', [Validators.required, FormValidationService.emailValidator]], pseudonym: ['', Validators.required],
         password: ['', Validators.required], 
        password_: ['', Validators.required],
        countryId: ['', Validators.required], //int
        accountId: ['', [Validators.required, FormValidationService.fieldNumberValidator]], //int
         location: ['', Validators.required]
};
