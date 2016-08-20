import { provideRouter, RouterConfig }       from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { LoginComponent } from "./shared/template/login/login.component";
import { FormCustomerUserComponent } from "./components/customer/user/customer.user.component";
import { FormCustomerAccountComponent } from "./components/customer/account/customer.account.component";
import { FormChangePasswordComponent } from "./components/customer/user/password.change.component";
// Routes
const SystemRoutes: RouterConfig = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'user', component: FormCustomerUserComponent},
	{path: 'account', component: FormCustomerAccountComponent},
	{path: 'changePassword', component: FormChangePasswordComponent}
];

export const routes: RouterConfig = [
	...SystemRoutes
];
export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];