import {Component, OnInit} from '@angular/core';
//import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
// Angular 2 Material.
import {Dir} from '@angular2-material/core/rtl/dir';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';
// Services.
import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
// Components.
/*
import {HomeComponent} from '../../home.component';
import {I18nComponent} from '../../i18n.component';
import {ListComponent} from '../../list.component';
import {ValidationComponent} from '../../validation.component';
*/
export type LayoutDirection = 'ltr' | 'rtl';

@Component({
    selector: 'app-component',
    directives: [/*ROUTER_DIRECTIVES,*/ Dir, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar],
    templateUrl: './app/components/app.component/app.component.html',
    providers: [LocaleService, LocalizationService], // Inherited by all descendants.
    pipes: [TranslatePipe]
})
/*
@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/i18n', component: I18nComponent },
    { path: '/list', component: ListComponent },
    { path: '/validation', component: ValidationComponent }
])
*/
export class AppComponent extends Locale implements OnInit {

    dir: LayoutDirection;

    constructor(/*private router: Router,*/ public locale: LocaleService, public localization: LocalizationService) {
        super(null, localization);

        // Adds a new language (ISO 639 two-letter or three-letter code).
        this.locale.addLanguage('en');
        this.locale.addLanguage('it');
        this.locale.addLanguage('ar');
        this.locale.addLanguage('es');
        // Add a new language here.

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);

        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');

        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./app/I18n/locale-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.

        // Initializes direction.
        if (this.locale.getCurrentLanguage() == "ar") {

            this.dir = 'rtl';

        } else {

            this.dir = 'ltr';

        }

    }

    ngOnInit() {

        //this.router.navigate(['/home']);

    }

    // Gets the current country.
    get currentCountry(): string {

        return this.locale.getCurrentCountry();

    }

    // Sets a new locale & currency.
    selectLocale(language: string, country: string, currency: string) {

        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);

    }

}