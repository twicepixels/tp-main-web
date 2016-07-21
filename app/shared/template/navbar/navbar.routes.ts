import { RouterConfig }          from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { HomeComponent } from '../../../components/temp/home.component';
import { I18nComponent } from '../../../components/temp/i18n.component';
import { ListComponent } from '../../../components/temp/list.component';
import { ValidationComponent } from '../../../components/temp/validation.component';
import { FormComponent } from '../../../components/temp/form.component';
import { FormCustomerUserComponent } from '../../../components/customer.user/customer.user.component.ts';

export const NavbarRoutes: RouterConfig = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'i18n', component: I18nComponent},
	{path: 'list', component: ListComponent},
	{path: 'login', component: LoginComponent},
	{path: 'validation', component: ValidationComponent},
	{path: 'form', component: FormComponent},
	{path: 'user/:id', component: FormCustomerUserComponent}
];