import { NgModule } from '@angular/core';
import {
	LocationStrategy,
	HashLocationStrategy
} from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

import { routing, appRoutingProviders } from "./app.routes";
import { BootstrapService } from "./shared/base.component";
import { RestService } from './shared/service/rest.service';
import { AuthService } from './shared/service/auth/auth.service';
import { MainComponent } from './shared/template/page/main.component';
import { LanguageService } from "./shared/service/language/language.service";
import { LocalizationService, LocaleService } from "angular2localization/angular2localization";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		routing
	],
	declarations: [
		MainComponent,
		appRoutingProviders
	],
	providers: [
		AuthService,
		RestService,
		LocaleService,
		LanguageService,
		BootstrapService,
		LocalizationService,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	],
	bootstrap: [MainComponent]
})
export class AppModule {
}