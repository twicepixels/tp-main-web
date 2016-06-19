import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';

//enableProdMode();

bootstrap(NavbarComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
