
import {Injectable} from '@angular/core';
import {LANGUAGES} from './languages-data';

@Injectable()
export class LanguageService {
    getLanguages(){
        return Promise.resolve(LANGUAGES);
    }
}
