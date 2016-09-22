import { Routes, RouterModule }       from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { LoginComponent } from "./shared/template/login/login.component";
import { FormCustomerUserComponent } from "./components/customer/user/customer.user.component";
import { FormChangePasswordComponent } from "./components/customer/user/password.change.component";
import { FormCustomerAccountComponent } from "./components/customer/account/customer.account.component";
import { FormLoaderImageComponent } from "./components/customer/collaborator/loader.image.component";
// Routes
const SystemRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'user', component: FormCustomerUserComponent},
	{path: 'account', component: FormCustomerAccountComponent},
	{path: 'changePassword', component: FormChangePasswordComponent},
	{path: 'loadImage', component: FormLoaderImageComponent}
];

export const appRoutingProviders: any[] = [
	HomeComponent,
	LoginComponent,
	FormCustomerUserComponent,
	FormChangePasswordComponent,
	FormCustomerAccountComponent,
	FormLoaderImageComponent
];

export const AppRouterModule = RouterModule.forRoot(SystemRoutes);