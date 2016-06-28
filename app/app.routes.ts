import { provideRouter, RouterConfig }       from '@angular/router';
// Routes
import { NavbarRoutes } from './shared/template/navbar/navbar.routes'

export const routes: RouterConfig = [
	...NavbarRoutes
];
export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];