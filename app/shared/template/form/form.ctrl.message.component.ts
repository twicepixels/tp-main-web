import { baseProvider, BaseComponent, BootstrapService } from "../../base.component";
import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { LocalizationService } from 'angular2localization/angular2localization';

@Component({
	selector: 'form-ctrl-message',
	template: require('./form.ctrl.message.component.html'),
	providers: [baseProvider, LocalizationService]
})
export class FormCtrlMessage extends BaseComponent {

	public _errorMessage: string;
	@Input() control: FormControl;

	constructor(boot: BootstrapService) {
		super(boot);
		this.addTranslationScope("error");
	}

	get errorMessage(): string {
		this._errorMessage = null;
		for (let propertyName in this.control.errors) {
			if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
				// console.log("error message :" + propertyName);
				return this._errorMessage = propertyName;
			}
		}
		return this._errorMessage;
	}
}