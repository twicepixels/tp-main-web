import {
	LocationStrategy,
	HashLocationStrategy
} from '@angular/common';
import {
	TranslatePipe,
	LocaleService,
	LocalizationService
} from "angular2localization/angular2localization";
import {
	FormsModule,
	ReactiveFormsModule
}    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routes";
import { baseProvider } from "./shared/base.component";
import { RestService } from './shared/service/rest.service';
import { AuthService } from './shared/service/auth/auth.service';
import { MainComponent } from './shared/template/page/main.component';
import { LanguageService } from "./shared/service/language/language.service";
import { FormCtrlMessage } from "./shared/template/form/form.ctrl.message.component";

@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		TranslatePipe,
		MainComponent,
		FormCtrlMessage,
		appRoutingProviders
	],
	providers: [
		baseProvider,
		RestService,
		AuthService,
		LocaleService,
		LanguageService,
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