/**
 * Created by Juanjo on 27/09/2016.
 */
import {Validators} from '@angular/forms';
import {FormValidationService} from '../../../shared/service/form/form.validation.service';

export const CollaboratorForm: any = {
    //id: ['', Validators.required],
    identityCard: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    phoneNumber: ['', Validators.required],
    postalCode: ['', Validators.required],
    rating: [''],
    city: [''],
    countryId: [''],
    picture: [''],
    //authorized: ['', Validators.required],
    //accountId: ['', Validators.required],
    description: ['', Validators.required]
};
