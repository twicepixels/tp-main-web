import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRouterModule, appRoutingProviders } from "./app.routes";
import {
	baseProvider,
	SearchComponent,
	NavbarComponent,
	BackToTop,
	MainComponent,
	FormCtrlMessage,
	RestService,
	AuthService,
	LanguageService
} from "./shared/";
@NgModule({
	imports: [
		HttpModule,
		FormsModule,
		BrowserModule,
		AppRouterModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			useFactory: (http: Http) => new TranslateStaticLoader(http, '/app/I18n', '.json'),
			provide: TranslateLoader,
			deps: [Http]
		})
	],
	declarations: [
		MainComponent,
		BackToTop,
		FormCtrlMessage,
		NavbarComponent,
		SearchComponent,
		appRoutingProviders
	],
	providers: [
		baseProvider,
		RestService,
		AuthService,
		LanguageService,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	],
	bootstrap: [MainComponent]
})
export class AppModule {
}