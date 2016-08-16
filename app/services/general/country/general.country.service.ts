import {Injectable, Inject} from '@angular/core';
import {Country} from './country';
import {RestService} from '../../../shared/service/rest.service';

@Injectable()
export class GeneralCountryService {
    country:Country;

    constructor(private restService:RestService){
    }


    //get
    get():Promise<any> {
        let _service = this.restService;
        return new Promise(function (resolve, reject) {
            _service.post("tp-main","getAllCountries",{}).then(
                (data: any)=> {
                    resolve(data);
                },
                (reason: any) => {
                    reject( reason );
                }
            );
        });
    }

}
