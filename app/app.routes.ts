import { Routes, RouterModule }       from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { LoginComponent } from "./shared/template/login/login.component";
import { FormCustomerUserComponent } from "./components/customer/user/customer.user.component";
import { FormChangePasswordComponent } from "./components/customer/user/password.change.component";
import { FormCustomerAccountComponent } from "./components/customer/account/customer.account.component";
// Routes
const SystemRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'user', component: FormCustomerUserComponent},
	{path: 'account', component: FormCustomerAccountComponent},
	{path: 'changePassword', component: FormChangePasswordComponent}
];

export const appRoutingProviders: any[] = [
	HomeComponent,
	LoginComponent,
	FormCustomerUserComponent,
	FormChangePasswordComponent,
	FormCustomerAccountComponent
];

export const routing = RouterModule.forRoot(SystemRoutes);