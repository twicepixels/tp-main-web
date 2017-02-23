/**
 * Created by Juanjo on 29/09/2016.
 */

import { BaseComponent, BootstrapService } from "../../../shared/base.component";
import { Component, Renderer, ViewChild, ElementRef } from "@angular/core";
import { FormGroup } from '@angular/forms';
// Pipes.
// Services.
import { CustomerCollaboratorService } from '../../../services/customer/collaborator/customer.collaborator.service';
import { UtilService } from '../../../services/general/util.service';
// Beans.
import { Collaborator } from '../../../services/customer/collaborator/collaborator';
import { CollaboratorForm } from "../../../services/customer/collaborator/customer.collaborator.model";

import { DomSanitizer} from '@angular/platform-browser';


@Component({
    template: require('./customer.collaborator.component.html'),
    providers: [UtilService, CustomerCollaboratorService ]
})

export class FormCustomerCollaboratorComponent extends BaseComponent {
    @ViewChild('files') files: ElementRef;
    collaborator: Collaborator;
    collaboratorForm: FormGroup;
    countries: Object[];
    infoMessage: string;
    errorMessage: string;
    usr: any;
    private objCollaborator: string = "Collaborator";
    vProgress: number;
    imageData: any;

    constructor(boot: BootstrapService,
                public utilService: UtilService,
                private renderer: Renderer,
                private sanitizer:DomSanitizer,
                public customerCollaboratorService: CustomerCollaboratorService) {
        super(boot);
        //put forms elements into form builder group
        this.collaboratorForm = this.formBuilder.group(CollaboratorForm);

        if (this.auth.isLoggedIn()) {
            this.utilService.getAllCountries().then((data: any) => {
                this.countries = data;

                this.usr = this.auth.getUserInfo();

                if (this.usr) {
                    this.fillCollaboratorInfo(this.usr['accountId']);
                }

            }, (reason: string) => {
                console.log(reason);
            });
        }
        else{
            //this.updateMessages("You must first authenticate!!", null);
            alert("You must first authenticate!!");
            this.router.navigate(['/login'])
        }
    }


    SubmitButtonAction() {
        if (this.collaboratorForm.dirty && this.collaboratorForm.valid) {
            
            this.collaborator = this.collaboratorForm.value;

           this.collaborator.picture = localStorage.getItem("picture").toJSON() ;
            console.log( 'picture');
            console.log( this.collaborator.picture);
            this.collaborator.authorized = false; // SE CREA COMO NO AUTORIZADO HASTA QUE SEA REVISADO
            //this.collaborator.rating = 3;
            this.errorMessage = null

           // let usr: any = this.auth.getUserInfo();
            if (this.usr) {
                this.collaborator.accountId = this.usr['accountId'];
            }


            let collaboratorStorage = localStorage.getItem(this.objCollaborator);
            let collaboratorSession = JSON.parse(collaboratorStorage);
            if(collaboratorSession == null)
                this.createCollaborator(this.collaborator);
            else{
                this.collaborator.id = collaboratorSession.id;
                this.updateCollaborator(this.collaborator);
            }

            


        }
    }

    //get
    fillCollaboratorInfo(accoundId: number): void {

        let account: any; //new object declaration
        account = { "accountId": "" + accoundId + "" };
        let jAccount = <JSON>account;
        //this.output.stringify(this.obj);

        this.customerCollaboratorService.getAll(jAccount).then(
            (data: any) => {
                if(data[0] == null || data[0].length === 0)
                    localStorage.removeItem(this.objCollaborator);
                else{

                    this.fillFormGroup(data[0], this.collaboratorForm);
                    let jsonStr = JSON.stringify(data[0]);
                    localStorage.setItem(this.objCollaborator,jsonStr);

                    var binary = '';
                    var bytes = new Uint8Array( data[0].picture.data );
                    var len = bytes.byteLength;
                    console.log('lengthBytesData' + len);


                    //console.log(data[0]);
                    for (var i = 0; i < len; i++) {
                        binary += String.fromCharCode( bytes[ i ] );
                    }
                    //return window.btoa( binary );
                    //this.sanitizer.bypassSecurityTrustUrl('Notes://MYSERVER/C1256D3B004057E8');
                   // console.log(window.btoa( binary ));
                    let trust = this.sanitizer.bypassSecurityTrustUrl(window.btoa( binary ) );
                    //console.log('trust');
                    //console.log(trust);
                    //this.imageData = 'data:image/png;base64,' + trust;
                    // this.imageData = 'data:image/png;base64,' + window.btoa( binary );

                    //////

                    var blob = new Blob([new Uint8Array(data[0].picture.data )],{
                        //type: res.headers.get("Content-Type")
                    });
                    var urlCreator = window.URL;
                    //this.imageData = this.sanitizer.bypassSecurityTrustUrl( urlCreator.createObjectURL(blob));

                    console.log('data[0]');
                    console.log(data[0]);
                    console.log('data.d');
                    console.log(data.d);
                    console.log('data[0].picture');
                    console.log(data[0].picture);


                    //this.imageData = data[0].picture;
                    this.imageData = this.sanitizer.bypassSecurityTrustResourceUrl(data[0].picture);

                    //console.log(urlCreator);
                    //console.log('blob');
                    //console.log( blob);


                    //this.imageData = "data:image/png;base64," + data[0].picture.data.buffer;
                    //this.imageData = "data:image/png;base64," + data[0].picture.data;

                   // this.imageData = "data:image/png;base64," + trust;

                    //console.log(data[0].picture[0]);
                    //console.log('picture.data');



                }
            }, (reason: string) => {
                console.log(reason);
            }
        );
    }

    //create
    createCollaborator(collaborator: Collaborator): void {
        //let _service = this;
        this.customerCollaboratorService.create(collaborator).then(
            (data: any) => {
                this.fillCollaboratorInfo(this.usr['accountId']);
                //localStorage.removeItem(this.objCollaborator);
                //this.collaboratorForm.reset();
                alert("Change accepted !!");
                //this.updateMessages("Change accepted !!", null);
            }, (reason: string) => {
                console.log(reason);
                alert("Error creating !!");
                //this.updateMessages(null, "Error updated !!");
            }
        );
    }

    //update
    updateCollaborator(collaborator: Collaborator): void {
        //let _service = this;
        this.customerCollaboratorService.collaboratorUpdate(collaborator).then(
            (data: any) => {
                //localStorage.removeItem(this.objCollaborator);
                //this.collaboratorForm.reset();
                alert("Change accepted !!");
                //this.updateMessages("Change accepted !!", null);
            }, (reason: string) => {
                console.log(reason);
                alert("Error updated !!");
                //this.updateMessages(null, "Error updated !!");
            }
        );
    }

    updateMessages(infoMessage: string, errorMessage: string) {
        this.infoMessage = null;
        this.errorMessage = null;
        if (infoMessage != null) {
            this.infoMessage = infoMessage;
        }
        if (errorMessage != null) {
            this.errorMessage = errorMessage;
        }
        new Promise(() => {
            setTimeout(() => {
                this.infoMessage = null;
                this.errorMessage = null;
            }, 5000);
        });
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
            //this.loadImageService.uploadImage(xhr, formData);
             localStorage.setItem("picture", formData);

        });
    }
}
