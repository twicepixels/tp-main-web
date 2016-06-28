import { bootstrap }    from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Providers
import {enableProdMode} from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from "./app.routes";
// Components
import { AuthService } from './shared/service/auth/auth.service';
import { MainComponent } from './shared/template/page/main.component';

enableProdMode();
bootstrap(MainComponent, [
		AuthService,
		HTTP_PROVIDERS,
		APP_ROUTER_PROVIDERS,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	]
).catch(err => console.error(err));