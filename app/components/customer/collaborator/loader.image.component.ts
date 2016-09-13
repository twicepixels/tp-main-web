/**
 * Created by Gabriel on 05/09/2016.
 */
import {baseProvider, BaseComponent, BootstrapService} from "../../../shared/base.component";
import {Component, Renderer, ViewChild, ElementRef} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup} from "@angular/forms";
import {TranslatePipe} from "angular2localization/angular2localization";
import {LoadImageService} from "../../../services/customer/collaborator/load.image.user.service";
import {UtilService} from "../../../services/general/util.service";
import {UploadService} from "../../../shared/service/unload.service";
import {LoaderImageForm} from "../../../services/customer/collaborator/loader.image.model";
import {FormCtrlMessage} from "../../../shared/template/form/form.ctrl.message.component";
// Pipes.
// Services.
// Beans.

import fs = require('fs');
import path = require('path');

@Component({
    template: require('./loader.image.component.html'),
    styles: [require('./loader.image.component.less')],
    pipes: [TranslatePipe],
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        FormCtrlMessage
    ],
    providers: [
        baseProvider,
        UtilService,
        LoadImageService,
        UploadService,
    ]
})


export class FormLoaderImageComponent extends BaseComponent {
    @ViewChild('files') files:ElementRef;
    loadImageForm:FormGroup;
    infoMessage:string;
    errorMessage:string;
    vProgress:number;

    constructor(boot:BootstrapService,
                public utilService:UtilService,
                public uploadService:UploadService,
                public loadImageService:LoadImageService,
                private renderer:Renderer) {
        super(boot);
        this.infoMessage = null;
        this.errorMessage = null;
        this.loadImageForm = this.formBuilder.group(LoaderImageForm);
    }

    SubmitButtonAction($event:any):any {
        /*let inputValue = $event.target;
         var formData = new FormData();
         formData.append("name", "Name");
         formData.append("file", inputValue.files[0]);
         this.loadImageService.saveImage(formData);*/
    }

    showImageBrowseDlg() {
        let event = new MouseEvent('click', {bubbles: true});
        event.stopPropagation();
        // let ctrl = this.loadImageForm.controls["files"];
        this.renderer.invokeElementMethod(this.files.nativeElement, 'dispatchEvent', [event]);
    }

    changeFiles($event:any) {
        console.log('onChange');
        let inputValue = $event.target;
        console.log(inputValue);
        /*this.uploadService.makeFileRequest('http://localhost:3001/upload', [], inputValue).subscribe(() => {
         console.log('sent');
         });*/
        this.makeFileRequest("http://localhost:3000/upload", [], inputValue).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
        var formData = new FormData();
        formData.append("name", inputValue.files[0].name);
        formData.append("file", inputValue.files[0]);
        this.loadImageService.saveImage(formData);
    }

    makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
        return new Promise((resolve, reject) => {
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
                this.vProgress = (i + 1) / files.length * 100;
                console.log(this.vProgress);
                // this.loadImageForm.controls["progressBar"].setValue((i + 1) / files.length * 100);
            }
            /*xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);*/
        });
    }
}