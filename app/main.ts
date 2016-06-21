import {bootstrap}    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AuthenticationComponent} from './services/login.service/authentication.component.ts';

//enableProdMode();

bootstrap(NavbarComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,  
          provide(LocationStrategy, {useClass: HashLocationStrategy}), AuthenticationComponent]);

