"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var angular2localization_3 = require('angular2localization/angular2localization');
var angular2localization_4 = require('angular2localization/angular2localization');
var ListComponent = (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(locale, localization) {
        _super.call(this, locale, localization);
        this.locale = locale;
        this.localization = localization;
        // Array that contains the columns to look for.
        this.keyNames = [];
        // Instantiates a new LocalizationService for this component and for its descendants.
        this.localization.translationProvider('./app/I18n/locale-list-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.
        this.intlSupport = angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
        this.DATA = this.loadData();
        this.keyNames.push('position');
        this.keyName = "";
        this.order = "";
        this.s = "";
    }
    ListComponent.prototype.orderBy = function (keyName, order) {
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
    };
    ListComponent.prototype.search = function (s) {
        // Initializes the data if the search string is shorter than the previous.
        if (s.length < this.s.length) {
            this.DATA = this.localization.search(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' });
            // Keeps sorting.
            this.orderBy(this.keyName, this.order);
        }
        else {
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
    };
    ListComponent.prototype.reset = function () {
        // Initializes the data.
        this.DATA = this.loadData();
        // Keeps sorting.
        this.orderBy(this.keyName, this.order);
    };
    ListComponent.prototype.loadData = function () {
        // Mock data.    
        var DATA = new Array();
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
    };
    ListComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/temp.component/list.component.html',
            providers: [angular2localization_1.LocalizationService],
            pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDatePipe, angular2localization_4.LocaleCurrencyPipe],
            directives: [card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MdButton, input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], ListComponent);
    return ListComponent;
}(angular2localization_1.Locale));
exports.ListComponent = ListComponent;
var Data = (function () {
    function Data() {
    }
    return Data;
}());
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELFlBQVk7QUFDWixxQ0FBc0UsMkNBQTJDLENBQUMsQ0FBQTtBQUNsSCxTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUscUNBQTZCLDJDQUEyQyxDQUFDLENBQUE7QUFDekUscUNBQWlDLDJDQUEyQyxDQUFDLENBQUE7QUFTN0U7SUFBbUMsaUNBQU07SUFtQnJDLHVCQUFtQixNQUFxQixFQUFTLFlBQWlDO1FBQzlFLGtCQUFNLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQURiLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFibEYsK0NBQStDO1FBQy9DLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFlakIscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtRQUMvSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7UUFFekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxD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QUksQ0FBQztJQUVoQixDQUFDO0lBcEpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxxREFBcUQ7WUFDbEUsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7WUFDaEMsS0FBSyxFQUFFLENBQUMsb0NBQWEsRUFBRSxxQ0FBYyxFQUFFLHlDQUFrQixDQUFDO1lBQzFELFVBQVUsRUFBRSxDQUFDLHlCQUFrQixFQUFFLHlCQUFrQixFQUFFLGlCQUFRLEVBQUUsMkJBQW1CLENBQUM7U0FDdEYsQ0FBQzs7cUJBQUE7SUFpSkYsb0JBQUM7QUFBRCxDQUFDLEFBL0lELENBQW1DLDZCQUFNLEdBK0l4QztBQS9JWSxxQkFBYSxnQkErSXpCLENBQUE7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQUksT0FPaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxuaW1wb3J0IHtNRF9DQVJEX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0Jztcbi8vIFNlcnZpY2VzLlxuaW1wb3J0IHtMb2NhbGUsIExvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UsIEludGxTdXBwb3J0fSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XG4vLyBQaXBlcy5cbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtMb2NhbGVEYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtMb2NhbGVDdXJyZW5jeVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3RlbXAuY29tcG9uZW50L2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0xvY2FsaXphdGlvblNlcnZpY2VdLCBcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIExvY2FsZURhdGVQaXBlLCBMb2NhbGVDdXJyZW5jeVBpcGVdLFxuICAgIGRpcmVjdGl2ZXM6IFtNRF9DQVJEX0RJUkVDVElWRVMsIE1EX0xJU1RfRElSRUNUSVZFUywgTWRCdXR0b24sIE1EX0lOUFVUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBleHRlbmRzIExvY2FsZSB7XG5cbiAgICBpbnRsU3VwcG9ydDogYm9vbGVhbjtcblxuICAgIERBVEE6IEFycmF5PERhdGE+O1xuXG4gICAgLy8gQXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29sdW1ucyB0byBsb29rIGZvci5cbiAgICBrZXlOYW1lczogYW55W10gPSBbXTtcblxuICAgIC8vIFRoZSBjb2x1bW4gdGhhdCBjb250YWlucyB0aGUga2V5cyBvZiB0aGUgdmFsdWVzIHRvIGJlIG9yZGVyZWQuXG4gICAga2V5TmFtZTogYW55O1xuXG4gICAgLy8gJ2FzYycgb3IgJ2Rlc2MnLlxuICAgIG9yZGVyOiBzdHJpbmc7XG5cbiAgICAvLyBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAgICBzOiBzdHJpbmc7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLCBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGxvY2FsZSwgbG9jYWxpemF0aW9uKTtcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgYSBuZXcgTG9jYWxpemF0aW9uU2VydmljZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIGZvciBpdHMgZGVzY2VuZGFudHMuXG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUHJvdmlkZXIoJy4vYXBwL0kxOG4vbG9jYWxlLWxpc3QtJyk7IC8vIFJlcXVpcmVkOiBpbml0aWFsaXplcyB0aGUgdHJhbnNsYXRpb24gcHJvdmlkZXIgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBwcmVmaXguXG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uLnVwZGF0ZVRyYW5zbGF0aW9uKCk7IC8vIE5lZWQgdG8gdXBkYXRlIHRoZSB0cmFuc2xhdGlvbi5cblxuICAgICAgICB0aGlzLmludGxTdXBwb3J0ID0gSW50bFN1cHBvcnQuQ29sbGF0b3IodGhpcy5sb2NhbGUuZ2V0Q3VycmVudExhbmd1YWdlKCkpO1xuXG4gICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgdGhpcy5rZXlOYW1lcy5wdXNoKCdwb3NpdGlvbicpO1xuICAgICAgICB0aGlzLmtleU5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9yZGVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5zID0gXCJcIjtcblxuICAgIH1cblxuICAgIG9yZGVyQnkoa2V5TmFtZTogc3RyaW5nLCBvcmRlcj86IHN0cmluZykge1xuXG4gICAgICAgIGlmICh0aGlzLmtleU5hbWUgIT0ga2V5TmFtZSB8fCB0aGlzLm9yZGVyICE9IG9yZGVyKSB7XG5cbiAgICAgICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9jYWxpemF0aW9uLnNvcnQodGhpcy5EQVRBLCBrZXlOYW1lLCBvcmRlciwgXCJcIiwgeyBzZW5zaXRpdml0eTogJ3ZhcmlhbnQnIH0pO1xuXG4gICAgICAgICAgICAvLyBBc3luYyBtZXRob2RzLlxuICAgICAgICAgICAgLyp0aGlzLmxvY2FsaXphdGlvbi5zb3J0QXN5bmModGhpcy5EQVRBLCBrZXlOYW1lLCBvcmRlciwgXCJcIiwgeyBzZW5zaXRpdml0eTogJ3ZhcmlhbnQnIH0pLmZvckVhY2goXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gTmV4dC5cbiAgICAgICAgICAgICAgICAobGlzdDogQXJyYXk8RGF0YT4pID0+IHsgdGhpcy5EQVRBID0gbGlzdCB9XG4gICAgXG4gICAgICAgICAgICApOyovXG5cbiAgICAgICAgICAgIC8vIFN0b3JlcyBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgdGhpcy5rZXlOYW1lID0ga2V5TmFtZTtcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZWFyY2goczogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXMgdGhlIGRhdGEgaWYgdGhlIHNlYXJjaCBzdHJpbmcgaXMgc2hvcnRlciB0aGFuIHRoZSBwcmV2aW91cy5cbiAgICAgICAgaWYgKHMubGVuZ3RoIDwgdGhpcy5zLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB0aGlzLkRBVEEgPSB0aGlzLmxvY2FsaXphdGlvbi5zZWFyY2gocywgdGhpcy5sb2FkRGF0YSgpLCB0aGlzLmtleU5hbWVzLCB7IHVzYWdlOiAnc2VhcmNoJywgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KTtcbiAgICAgICAgICAgIC8vIEtlZXBzIHNvcnRpbmcuXG4gICAgICAgICAgICB0aGlzLm9yZGVyQnkodGhpcy5rZXlOYW1lLCB0aGlzLm9yZGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDb250aW51ZXMgdGhlIHNlYXJjaCB3aXRoIHRoZSBlbnRlcmVkIHN0cmluZy5cbiAgICAgICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9jYWxpemF0aW9uLnNlYXJjaChzLCB0aGlzLkRBVEEsIHRoaXMua2V5TmFtZXMsIHsgdXNhZ2U6ICdzZWFyY2gnLCBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBBc3luYyBtZXRob2RzLlxuICAgICAgICAvKnRoaXMuREFUQSA9IG5ldyBBcnJheTxEYXRhPigpO1xuXG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uLnNlYXJjaEFzeW5jKHMsIHRoaXMubG9hZERhdGEoKSwgdGhpcy5rZXlOYW1lcywgeyB1c2FnZTogJ3NlYXJjaCcsIHNlbnNpdGl2aXR5OiAnYmFzZScgfSkuZm9yRWFjaChcblxuICAgICAgICAgICAgLy8gTmV4dC5cbiAgICAgICAgICAgIChkYXRhOiBEYXRhKSA9PiB7IHRoaXMuREFUQS5wdXNoKGRhdGEpIH1cblxuICAgICAgICApOyovXG5cbiAgICAgICAgLy8gU3RvcmVzIHRoZSBwYXJhbWV0ZXIuXG4gICAgICAgIHRoaXMucyA9IHM7XG5cbiAgICB9XG5cbiAgICByZXNldCgpIHtcblxuICAgICAgICAvLyBJbml0aWFsaXplcyB0aGUgZGF0YS5cbiAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAvLyBLZWVwcyBzb3J0aW5nLlxuICAgICAgICB0aGlzLm9yZGVyQnkodGhpcy5rZXlOYW1lLCB0aGlzLm9yZGVyKTtcblxuICAgIH1cblxuICAgIGxvYWREYXRhKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICAgIC8vIE1vY2sgZGF0YS4gICAgXG4gICAgICAgIHZhciBEQVRBID0gbmV3IEFycmF5PERhdGE+KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgRGF0YSgpO1xuXG4gICAgICAgIGRhdGEubmFtZSA9IFwiVGlnZXIgTml4b25cIjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiU3lzdGVtIEFyY2hpdGVjdFwiO1xuICAgICAgICBkYXRhLnNhbGFyeSA9IDMyMDgwMDtcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMTEvMDQvMjVcIik7XG4gICAgICAgIERBVEEucHVzaChkYXRhKTtcblxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcbiAgICAgICAgZGF0YS5uYW1lID0gXCJHYXJyZXR0IFdpbnRlcnNcIjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiQWNjb3VudGFudFwiO1xuICAgICAgICBkYXRhLnNhbGFyeSA9IDE3MDc1MDtcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMTEvMDcvMjVcIik7XG4gICAgICAgIERBVEEucHVzaChkYXRhKTtcblxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcbiAgICAgICAgZGF0YS5uYW1lID0gXCJBc2h0b24gQ294XCI7XG4gICAgICAgIGRhdGEucG9zaXRpb24gPSBcIkp1bmlvciBUZWNobmljYWwgQXV0aG9yXCI7XG4gICAgICAgIGRhdGEuc2FsYXJ5ID0gODYwMDA7XG4gICAgICAgIGRhdGEuc3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDA5LzAxLzEyXCIpO1xuICAgICAgICBEQVRBLnB1c2goZGF0YSk7XG5cbiAgICAgICAgZGF0YSA9IG5ldyBEYXRhKCk7XG4gICAgICAgIGRhdGEubmFtZSA9IFwiQ2VkcmljIEtlbGx5XCI7XG4gICAgICAgIGRhdGEucG9zaXRpb24gPSBcIlNlbmlvciBKYXZhc2NyaXB0IERldmVsb3BlclwiO1xuICAgICAgICBkYXRhLnNhbGFyeSA9IDQzMzA2MDtcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMTIvMDMvMjlcIik7XG4gICAgICAgIERBVEEucHVzaChkYXRhKTtcblxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcbiAgICAgICAgZGF0YS5uYW1lID0gXCJBaXJpIFNhdG91XCI7XG4gICAgICAgIGRhdGEucG9zaXRpb24gPSBcIkFjY291bnRhbnRcIjtcbiAgICAgICAgZGF0YS5zYWxhcnkgPSAxNjI3MDA7XG4gICAgICAgIGRhdGEuc3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDA4LzExLzI4XCIpO1xuICAgICAgICBEQVRBLnB1c2goZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIERBVEE7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIERhdGEge1xuXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgc2FsYXJ5OiBudW1iZXI7XG4gICAgc3RhcnREYXRlOiBEYXRlO1xuXG59XG4iXX0=