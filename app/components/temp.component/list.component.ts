import {Component} from '@angular/core';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
// Services.
import {Locale, LocaleService, LocalizationService, IntlSupport} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';
import {LocaleCurrencyPipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/components/temp.component/list.component.html',
    providers: [LocalizationService], 
    pipes: [TranslatePipe, LocaleDatePipe, LocaleCurrencyPipe],
    directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MD_INPUT_DIRECTIVES]
})

export class ListComponent extends Locale {

    intlSupport: boolean;

    DATA: Array<Data>;

    // Array that contains the columns to look for.
    keyNames: any[] = [];

    // The column that contains the keys of the values to be ordered.
    keyName: any;

    // 'asc' or 'desc'.
    order: string;

    // The string to search.
    s: string;
    

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);

        // Instantiates a new LocalizationService for this component and for its descendants.
        this.localization.translationProvider('./app/I18n/locale-list-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.

        this.intlSupport = IntlSupport.Collator(this.locale.getCurrentLanguage());

        this.DATA = this.loadData();
        this.keyNames.push('position');
        this.keyName = "";
        this.order = "";
        this.s = "";

    }

    orderBy(keyName: string, order?: string) {

        if (this.keyName != keyName || this.order != order) {

            this.DATA = this.localization.sort(this.DATA, keyName, order, "", { sensitivity: 'variant' });

            // Async methods.
            /*this.localization.sortAsync(this.DATA, keyName, order, "", { sensitivity: 'variant' }).forEach(
    
                // Next.
                (list: Array<Data>) => { this.DATA = list }
    
            );*/

            // Stores parameters.
            this.keyName = keyName;
            this.order = order;

        }

    }

    search(s: string) {

        // Initializes the data if the search string is shorter than the previous.
        if (s.length < this.s.length) {

            this.DATA = this.localization.search(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' });
            // Keeps sorting.
            this.orderBy(this.keyName, this.order);

        } else {

            // Continues the search with the entered string.
            this.DATA = this.localization.search(s, this.DATA, this.keyNames, { usage: 'search', sensitivity: 'base' });

        }

        // Async methods.
        /*this.DATA = new Array<Data>();

        this.localization.searchAsync(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' }).forEach(

            // Next.
            (data: Data) => { this.DATA.push(data) }

        );*/

        // Stores the parameter.
        this.s = s;

    }

    reset() {

        // Initializes the data.
        this.DATA = this.loadData();
        // Keeps sorting.
        this.orderBy(this.keyName, this.order);

    }

    loadData(): Array<any> {

        // Mock data.    
        var DATA = new Array<Data>();

        var data = new Data();

        data.name = "Tiger Nixon";
        data.position = "System Architect";
        data.salary = 320800;
        data.startDate = new Date("2011/04/25");
        DATA.push(data);

        data = new Data();
        data.name = "Garrett Winters";
        data.position = "Accountant";
        data.salary = 170750;
        data.startDate = new Date("2011/07/25");
        DATA.push(data);

        data = new Data();
        data.name = "Ashton Cox";
        data.position = "Junior Technical Author";
        data.salary = 86000;
        data.startDate = new Date("2009/01/12");
        DATA.push(data);

        data = new Data();
        data.name = "Cedric Kelly";
        data.position = "Senior Javascript Developer";
        data.salary = 433060;
        data.startDate = new Date("2012/03/29");
        DATA.push(data);

        data = new Data();
        data.name = "Airi Satou";
        data.position = "Accountant";
        data.salary = 162700;
        data.startDate = new Date("2008/11/28");
        DATA.push(data);

        return DATA;

    }

}

export class Data {

    name: string;
    position: string;
    salary: number;
    startDate: Date;

}
