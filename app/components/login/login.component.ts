import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationComponent} from '../../services/login.service/authentication.component';

// Services.
import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';

// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdRadioButton} from '@angular2-material/radio/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';

// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    selector: 'login',
    providers: [MdRadioDispatcher, AuthenticationComponent],
    pipes: [TranslatePipe],
    directives: [MD_CARD_DIRECTIVES, MdRadioButton, MD_INPUT_DIRECTIVES, MdButton],
    templateUrl: 'app/components/login/login.html'
})

export class LoginComponent extends Locale{

    public model = {
        search:""
    }
    public user = { username : "test",
        password: "test"
    };
    error: boolean = false;


    constructor(public auth: AuthenticationComponent,
                public router: Router,
                public locale: LocaleService,
                public localization: LocalizationService) {
        super(locale, localization);

    }

    onSubmit() {
        this.auth.login(this.user.username, this.user.password)
            .subscribe(
                (token: any) => {
                    this.router.navigate(['/home']);
                },
                () => {
                    this.error = true;
                }
            );
    }
    
}
