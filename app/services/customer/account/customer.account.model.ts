/**
 * Created by eduray on 7/29/16.
 */
import {Validators} from '@angular/forms';
import {FormValidationService} from '../../../shared/service/form/form.validation.service';

export const AccountForm: any = {
         email: ['', [Validators.required],FormValidationService.emailValidator],
         password: ['', Validators.required]
};
