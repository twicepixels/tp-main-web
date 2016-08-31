import { Injectable } from '@angular/core';
import { RestService } from '../../shared/service/rest.service';

@Injectable()
export class UtilService {
	constructor(private rest: RestService) {
	}

	getAllCountries(): Promise<any> {
		return this.rest.post("tp-main", "getAllCountries");
	}
}
