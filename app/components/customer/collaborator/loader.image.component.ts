import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component, Renderer, ViewChild, ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LoadImageService } from "../../../services/customer/collaborator/load.image.user.service";
import { LoaderImageForm } from "../../../services/customer/collaborator/loader.image.model";

@Component({
	template: require('./loader.image.component.html'),
	styles: [require('./loader.image.component.less')],
	providers: [LoadImageService]
})


export class FormLoaderImageComponent extends BaseComponent {
	@ViewChild('files') files: ElementRef;
	loadImageForm: FormGroup;
	infoMessage: string;
	errorMessage: string;
	vProgress: number;

	constructor(boot: BootstrapService, private renderer: Renderer,
	            public loadImageService: LoadImageService) {
		super(boot);
		this.infoMessage = null;
		this.errorMessage = null;
		this.loadImageForm = this.formBuilder.group(LoaderImageForm);
	}

	SubmitButtonAction($event: any): any {
	}

	showImageBrowseDlg() {
		let event = new MouseEvent('click', {bubbles: true});
		event.stopPropagation();
		this.renderer.invokeElementMethod(this.files.nativeElement, 'dispatchEvent', [event]);
	}

	changeFiles($event: any) {
		console.log('onChange');
		let inputValue = $event.target;
		this.makeFileRequest([], inputValue.files).then((result) => {
			console.log(result);
		}, (error) => {
			console.error(error);
		});
	}

	makeFileRequest(params: Array<string>, files: Array<File>) {
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			let cons = this;
			console.log("archivos:" + files);
			for (var i = 0; i < files.length; i++) {
				formData.append("uploads[]", files[i], files[i].name);
				//console.log("archivo:" + files[i].name); //TODO quitar
			}
			xhr.upload.addEventListener('progress', function (evt: any) {
				if (evt.lengthComputable) {
					// calculate the percentage of upload completed
					let percentComplete: number = evt.loaded / evt.total;
					percentComplete = percentComplete * 100;

					// update the Bootstrap progress bar with the new percentage
					cons.vProgress = percentComplete;
					//console.log(cons.vProgress);
				}
			}, false);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};
			this.loadImageService.saveImage(xhr, formData);
		});
	}
}