import { Validators } from "@angular/common";
export interface LoginModel {
	username: string;
	password: string;
}

export const LoginForm: any = {
	username: [null, Validators.required],
	password: [null, Validators.required]
};