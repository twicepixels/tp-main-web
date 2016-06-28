import { RouterConfig }          from '@angular/router';

import { HomeComponent } from '../../../components/temp/home.component';
import { I18nComponent } from '../../../components/temp/i18n.component';
import { ListComponent } from '../../../components/temp/list.component';
import { LoginComponent } from '../../../components/login/login.component';
import { ValidationComponent } from '../../../components/temp/validation.component';

export const NavbarRoutes: RouterConfig = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'i18n', component: I18nComponent},
	{path: 'list', component: ListComponent},
	{path: 'login', component: LoginComponent},
	{path: 'validation', component: ValidationComponent}
];