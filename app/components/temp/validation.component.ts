import {Component} from '@angular/core';
// FormBuilder with NgFormControl.
import {FormBuilder, ControlGroup} from '@angular/common';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
// Services.
import {Locale, LocaleService, LocalizationService, LocaleParser} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDecimalPipe} from 'angular2localization/angular2localization';
// Directives for FormBuilder with NgFormControl.
import {LocaleNumberValidator, validateLocaleNumber} from 'angular2localization/angular2localization';
// Directives for NgControl.
/*import {LocaleNumberValidator} from 'angular2localization/angular2localization';*/

@Component({
    templateUrl: './app/components/temp/validation.component.html',
    pipes: [TranslatePipe, LocaleDecimalPipe],
    directives: [LocaleNumberValidator, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton]
})

export class ValidationComponent extends Locale {

    value: string = "";

    // Options.
    digits: string = "1.2-2";
    minValue: number = -Math.round(Math.random() * 10000) / 100;
    maxValue: number = Math.round(Math.random() * 10000) / 100;

    parsedValue: number = null;

    // FormBuilder with NgFormControl.
    numberForm: ControlGroup;

    constructor(public locale: LocaleService, public localization: LocalizationService, private fb: FormBuilder) {
        super(locale, localization)

        this.numberForm = fb.group({
            'decimal': ['', validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
        });

    }

    onSubmit(value: any) {

        this.parsedValue = LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());

    }
}