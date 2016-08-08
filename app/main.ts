import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Providers
import { enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from "./app.routes";
// Components
import { RestService } from './shared/service/rest.service';
import { AuthService } from './shared/service/auth/auth.service';
import { MainComponent } from './shared/template/page/main.component';

enableProdMode();
bootstrap(MainComponent, [
		HTTP_PROVIDERS,
		APP_ROUTER_PROVIDERS,
		disableDeprecatedForms(),
		provideForms(),
		AuthService,
		RestService,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	]
).catch(err => console.error(err));