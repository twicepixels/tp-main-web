// import {Component, OnInit} from '@angular/core';
// import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
//
// // Angular 2 Material.
// import {Dir} from '@angular2-material/core/rtl/dir';
// import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
// import {MdToolbar} from '@angular2-material/toolbar';
//
// // Services.
// import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
//
// // Pipes.
// import {TranslatePipe} from 'angular2localization/angular2localization';
//
// // Components.
//
// import {HomeComponent} from '../temp/home.component';
// import {I18nComponent} from '../temp/i18n.component';
// import {ListComponent} from '../temp/list.component';
// import {ValidationComponent} from '../temp/validation.component';
// import {LoginComponent} from '../login/login.component';
//
// import {LanguageService} from '../../services/language.service/language.service';
// import {Language} from '../language/language';
//
//
//
// export type LayoutDirection = 'ltr' | 'rtl';
//
// @Component({
//     selector: 'nav-bar',
//     templateUrl: 'app/components/navbar/navbar.html',
//     directives: [ROUTER_DIRECTIVES, Dir, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar],
//     providers: [LocaleService, LocalizationService, LanguageService], //
//     pipes: [TranslatePipe]
// })
//
// @Routes([
//     { path: '/', component: HomeComponent },
//     { path: '/home', component: HomeComponent },
//     { path: '/i18n', component: I18nComponent },
//     { path: '/list', component: ListComponent },
//     { path: '/validation', component: ValidationComponent },
//     { path: '/login', component: LoginComponent }
// ])
//
// export class NavbarComponent extends Locale implements OnInit {
//
//     dir: LayoutDirection;
//
//     public languages : Language[];
//     private langSelected = {};
//
//     constructor(private router: Router,
//                 public locale: LocaleService,
//                 public localization: LocalizationService,
//                 private _languageService: LanguageService) {
//
//         super(null, localization);
//         this.getLanguages();
//
//         // Adds a new language (ISO 639 two-letter or three-letter code).
//         this.locale.addLanguage('en');
//         this.locale.addLanguage('it');
//         this.locale.addLanguage('ar');
//         this.locale.addLanguage('es');
//         // Add a new language here.
//
//         // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
//         this.locale.definePreferredLocale('en', 'US', 30);
//
//         // Optional: default currency (ISO 4217 three-letter code).
//         this.locale.definePreferredCurrency('USD');
//
//         // Initializes LocalizationService: asynchronous loading.
//         this.localization.translationProvider('./app/I18n/locale-'); // Required: initializes the translation provider with the given path prefix.
//         this.localization.updateTranslation(); // Need to update the translation.
//
//         // Initializes direction.
//         if (this.locale.getCurrentLanguage() == "ar") {
//
//             this.dir = 'rtl';
//
//         } else {
//
//             this.dir = 'ltr';
//
//         }//if
//     }
//
//     ngOnInit() {
//
//         this.router.navigate(['/home']);
//     }
//
//     getCurrentCountry():string {
//
//         return this.locale.getCurrentCountry();
//
//     }
//
//     getLanguages(){
//         this._languageService.getLanguages().then((languages:Language[])=> this.languages = languages )
//                                             .then(()=> this.selectLocale( this.languages[0]) );
//     }
//
//     selectLocale(language:Language) {
//         this.langSelected = language;
//         this.locale.setCurrentLocale(language.id, language.isoCode);
//         this.locale.setCurrentCurrency(language.currency);
//        console.log(language);
//     }
// }