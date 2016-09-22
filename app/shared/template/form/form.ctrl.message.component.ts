import { BaseComponent, BootstrapService } from "../../base.component";
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpModule } from "@angular/http";

@Component({
	selector: 'form-ctrl-message',
	providers: [HttpModule],
	template: require('./form.ctrl.message.component.html')
})
export class FormCtrlMessage extends BaseComponent {

	public _errorMessage: string;
	@Input() control: FormControl;

	constructor(boot: BootstrapService) {
		super(boot);
	}

	get errorMessage(): string {
		this._errorMessage = null;
		for (let propertyName in this.control.errors) {
			if (this.control.errors.hasOwnProperty(propertyName)
				&& this.control.touched) {
				return this._errorMessage = propertyName;
			}
		}
		return this._errorMessage;
	}
}