import {Validators} from '@angular/forms';
import {FormValidationService} from '../../../shared/service/form/form.validation.service';


export const UserForm: any = {
               id: ['', Validators.required],
        firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         userName: ['', Validators.required],
            email: ['', [Validators.required, FormValidationService.emailStructureValidator]],
        pseudonym: [''],
        countryId: [''],
         location: ['', Validators.required]
};
