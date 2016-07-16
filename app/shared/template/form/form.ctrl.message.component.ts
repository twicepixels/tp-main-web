/**
 * Created by eduray on 7/11/16.
 */
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Traslation
import { Locale,
         TranslatePipe,
         LocaleService,
         LocalizationService } from 'angular2localization/angular2localization';

// Services
import { LanguageService } from '../../service/language/language.service';



@Component({
    selector: 'form-ctrl-message',
    template: require('./form.ctrl.message.component.html'),
    providers: [ LocaleService, LanguageService, LocalizationService],
    pipes: [TranslatePipe]
})
export class FormCtrlMessage extends Locale {

    public _errorMessage: string;
    @Input() control: FormControl;



    constructor(localization: LocalizationService) {
        super(null, localization);
        LanguageService.addScope({
            prefix: "error",
            l10n: this.localization
        });
    }
    
    get errorMessage():string {
        this._errorMessage = null;
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return this._errorMessage = propertyName;
            }
        }

        return this._errorMessage;
    }
}