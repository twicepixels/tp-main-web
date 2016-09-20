/**
 * Created by Gabriel on 09/09/2016.
 */
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {RestService} from '../../../shared/service/rest.service';

@Injectable()
export class LoadImageService extends RestService{

    constructor(http: Http) {
        super(http);
    }

    saveImage(xhr:XMLHttpRequest, formData:FormData):void/*Promise<any>*/{
        console.log("save image;" + formData);
        let _url = this.url("tp-main", "upload", formData);
        console.log("entrando a " + _url);
        xhr.open("POST", _url, true);
        //xhr.setRequestHeader("Content-Type", "multipart/form-data");
        console.log("Enviando ");
        xhr.send(formData);
    }

}