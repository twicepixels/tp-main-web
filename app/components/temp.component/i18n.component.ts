import {Component} from '@angular/core';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdRadioButton} from '@angular2-material/radio/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
// Services.
import {Locale, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/components/temp.component/i18n.component.html',
    providers: [MdRadioDispatcher],
    pipes: [TranslatePipe],
    directives: [MD_CARD_DIRECTIVES, MdRadioButton, MD_INPUT_DIRECTIVES, MdButton]
})

export class I18nComponent extends Locale {

    message: string = "";

    gender: string = "";
    inviteMapping: any = {
        'male': 'Invite_him',
        'female': 'Invite_her'
    }

    messages: any = [];
    messageMapping: any = {
        '=0': 'No_messages',
        '=1': 'One_message',
        'other': '# messages'
    }

    constructor(public localization: LocalizationService) {
        super(null, localization);
    }

    addMessage(message: string) {

        this.messages.push(message);
        this.message = "";

    }

}