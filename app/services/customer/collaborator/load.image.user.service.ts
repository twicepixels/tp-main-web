/**
 * Created by Gabriel on 09/09/2016.
 */
import {Injectable, Inject} from '@angular/core';
import {RestService} from '../../../shared/service/rest.service';

@Injectable()
export class LoadImageService {

    constructor(private restService:RestService) {
    }

    saveImage(form:FormData):void/*Promise<any>*/{
        console.log(form);
    }

}