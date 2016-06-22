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
            templateUrl: './app/components/temp/list.component.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELFlBQVk7QUFDWixxQ0FBc0UsMkNBQTJDLENBQUMsQ0FBQTtBQUNsSCxTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUscUNBQTZCLDJDQUEyQyxDQUFDLENBQUE7QUFDekUscUNBQWlDLDJDQUEyQyxDQUFDLENBQUE7QUFTN0U7SUFBbUMsaUNBQU07SUFtQnJDLHVCQUFtQixNQUFxQixFQUFTLFlBQWlDO1FBQzlFLGtCQUFNLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQURiLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFibEYsK0NBQStDO1FBQy9DLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFlakIscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtRQUMvSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7UUFFekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxD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QUksQ0FBQztJQUVoQixDQUFDO0lBcEpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeEQsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7WUFDaEMsS0FBSyxFQUFFLENBQUMsb0NBQWEsRUFBRSxxQ0FBYyxFQUFFLHlDQUFrQixDQUFDO1lBQzFELFVBQVUsRUFBRSxDQUFDLHlCQUFrQixFQUFFLHlCQUFrQixFQUFFLGlCQUFRLEVBQUUsMkJBQW1CLENBQUM7U0FDdEYsQ0FBQzs7cUJBQUE7SUFpSkYsb0JBQUM7QUFBRCxDQUFDLEFBL0lELENBQW1DLDZCQUFNLEdBK0l4QztBQS9JWSxxQkFBYSxnQkErSXpCLENBQUE7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQUksT0FPaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxuaW1wb3J0IHtNRF9DQVJEX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0Jztcbi8vIFNlcnZpY2VzLlxuaW1wb3J0IHtMb2NhbGUsIExvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UsIEludGxTdXBwb3J0fSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XG4vLyBQaXBlcy5cbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtMb2NhbGVEYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtMb2NhbGVDdXJyZW5jeVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3RlbXAvbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbTG9jYWxpemF0aW9uU2VydmljZV0sIFxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZSwgTG9jYWxlRGF0ZVBpcGUsIExvY2FsZUN1cnJlbmN5UGlwZV0sXG4gICAgZGlyZWN0aXZlczogW01EX0NBUkRfRElSRUNUSVZFUywgTURfTElTVF9ESVJFQ1RJVkVTLCBNZEJ1dHRvbiwgTURfSU5QVVRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGV4dGVuZHMgTG9jYWxlIHtcblxuICAgIGludGxTdXBwb3J0OiBib29sZWFuO1xuXG4gICAgREFUQTogQXJyYXk8RGF0YT47XG5cbiAgICAvLyBBcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBjb2x1bW5zIHRvIGxvb2sgZm9yLlxuICAgIGtleU5hbWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgLy8gVGhlIGNvbHVtbiB0aGF0IGNvbnRhaW5zIHRoZSBrZXlzIG9mIHRoZSB2YWx1ZXMgdG8gYmUgb3JkZXJlZC5cbiAgICBrZXlOYW1lOiBhbnk7XG5cbiAgICAvLyAnYXNjJyBvciAnZGVzYycuXG4gICAgb3JkZXI6IHN0cmluZztcblxuICAgIC8vIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICAgIHM6IHN0cmluZztcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIobG9jYWxlLCBsb2NhbGl6YXRpb24pO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyBhIG5ldyBMb2NhbGl6YXRpb25TZXJ2aWNlIGZvciB0aGlzIGNvbXBvbmVudCBhbmQgZm9yIGl0cyBkZXNjZW5kYW50cy5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25Qcm92aWRlcignLi9hcHAvSTE4bi9sb2NhbGUtbGlzdC0nKTsgLy8gUmVxdWlyZWQ6IGluaXRpYWxpemVzIHRoZSB0cmFuc2xhdGlvbiBwcm92aWRlciB3aXRoIHRoZSBnaXZlbiBwYXRoIHByZWZpeC5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udXBkYXRlVHJhbnNsYXRpb24oKTsgLy8gTmVlZCB0byB1cGRhdGUgdGhlIHRyYW5zbGF0aW9uLlxuXG4gICAgICAgIHRoaXMuaW50bFN1cHBvcnQgPSBJbnRsU3VwcG9ydC5Db2xsYXRvcih0aGlzLmxvY2FsZS5nZXRDdXJyZW50TGFuZ3VhZ2UoKSk7XG5cbiAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLmtleU5hbWVzLnB1c2goJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMua2V5TmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3JkZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLnMgPSBcIlwiO1xuXG4gICAgfVxuXG4gICAgb3JkZXJCeShrZXlOYW1lOiBzdHJpbmcsIG9yZGVyPzogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKHRoaXMua2V5TmFtZSAhPSBrZXlOYW1lIHx8IHRoaXMub3JkZXIgIT0gb3JkZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2NhbGl6YXRpb24uc29ydCh0aGlzLkRBVEEsIGtleU5hbWUsIG9yZGVyLCBcIlwiLCB7IHNlbnNpdGl2aXR5OiAndmFyaWFudCcgfSk7XG5cbiAgICAgICAgICAgIC8vIEFzeW5jIG1ldGhvZHMuXG4gICAgICAgICAgICAvKnRoaXMubG9jYWxpemF0aW9uLnNvcnRBc3luYyh0aGlzLkRBVEEsIGtleU5hbWUsIG9yZGVyLCBcIlwiLCB7IHNlbnNpdGl2aXR5OiAndmFyaWFudCcgfSkuZm9yRWFjaChcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBOZXh0LlxuICAgICAgICAgICAgICAgIChsaXN0OiBBcnJheTxEYXRhPikgPT4geyB0aGlzLkRBVEEgPSBsaXN0IH1cbiAgICBcbiAgICAgICAgICAgICk7Ki9cblxuICAgICAgICAgICAgLy8gU3RvcmVzIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICB0aGlzLmtleU5hbWUgPSBrZXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlYXJjaChzOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBJbml0aWFsaXplcyB0aGUgZGF0YSBpZiB0aGUgc2VhcmNoIHN0cmluZyBpcyBzaG9ydGVyIHRoYW4gdGhlIHByZXZpb3VzLlxuICAgICAgICBpZiAocy5sZW5ndGggPCB0aGlzLnMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9jYWxpemF0aW9uLnNlYXJjaChzLCB0aGlzLmxvYWREYXRhKCksIHRoaXMua2V5TmFtZXMsIHsgdXNhZ2U6ICdzZWFyY2gnLCBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pO1xuICAgICAgICAgICAgLy8gS2VlcHMgc29ydGluZy5cbiAgICAgICAgICAgIHRoaXMub3JkZXJCeSh0aGlzLmtleU5hbWUsIHRoaXMub3JkZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIENvbnRpbnVlcyB0aGUgc2VhcmNoIHdpdGggdGhlIGVudGVyZWQgc3RyaW5nLlxuICAgICAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2NhbGl6YXRpb24uc2VhcmNoKHMsIHRoaXMuREFUQSwgdGhpcy5rZXlOYW1lcywgeyB1c2FnZTogJ3NlYXJjaCcsIHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzeW5jIG1ldGhvZHMuXG4gICAgICAgIC8qdGhpcy5EQVRBID0gbmV3IEFycmF5PERhdGE+KCk7XG5cbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24uc2VhcmNoQXN5bmMocywgdGhpcy5sb2FkRGF0YSgpLCB0aGlzLmtleU5hbWVzLCB7IHVzYWdlOiAnc2VhcmNoJywgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KS5mb3JFYWNoKFxuXG4gICAgICAgICAgICAvLyBOZXh0LlxuICAgICAgICAgICAgKGRhdGE6IERhdGEpID0+IHsgdGhpcy5EQVRBLnB1c2goZGF0YSkgfVxuXG4gICAgICAgICk7Ki9cblxuICAgICAgICAvLyBTdG9yZXMgdGhlIHBhcmFtZXRlci5cbiAgICAgICAgdGhpcy5zID0gcztcblxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuXG4gICAgICAgIC8vIEluaXRpYWxpemVzIHRoZSBkYXRhLlxuICAgICAgICB0aGlzLkRBVEEgPSB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIC8vIEtlZXBzIHNvcnRpbmcuXG4gICAgICAgIHRoaXMub3JkZXJCeSh0aGlzLmtleU5hbWUsIHRoaXMub3JkZXIpO1xuXG4gICAgfVxuXG4gICAgbG9hZERhdGEoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgICAgLy8gTW9jayBkYXRhLiAgICBcbiAgICAgICAgdmFyIERBVEEgPSBuZXcgQXJyYXk8RGF0YT4oKTtcblxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBEYXRhKCk7XG5cbiAgICAgICAgZGF0YS5uYW1lID0gXCJUaWdlciBOaXhvblwiO1xuICAgICAgICBkYXRhLnBvc2l0aW9uID0gXCJTeXN0ZW0gQXJjaGl0ZWN0XCI7XG4gICAgICAgIGRhdGEuc2FsYXJ5ID0gMzIwODAwO1xuICAgICAgICBkYXRhLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAxMS8wNC8yNVwiKTtcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGRhdGEgPSBuZXcgRGF0YSgpO1xuICAgICAgICBkYXRhLm5hbWUgPSBcIkdhcnJldHQgV2ludGVyc1wiO1xuICAgICAgICBkYXRhLnBvc2l0aW9uID0gXCJBY2NvdW50YW50XCI7XG4gICAgICAgIGRhdGEuc2FsYXJ5ID0gMTcwNzUwO1xuICAgICAgICBkYXRhLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAxMS8wNy8yNVwiKTtcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGRhdGEgPSBuZXcgRGF0YSgpO1xuICAgICAgICBkYXRhLm5hbWUgPSBcIkFzaHRvbiBDb3hcIjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiSnVuaW9yIFRlY2huaWNhbCBBdXRob3JcIjtcbiAgICAgICAgZGF0YS5zYWxhcnkgPSA4NjAwMDtcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMDkvMDEvMTJcIik7XG4gICAgICAgIERBVEEucHVzaChkYXRhKTtcblxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcbiAgICAgICAgZGF0YS5uYW1lID0gXCJDZWRyaWMgS2VsbHlcIjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiU2VuaW9yIEphdmFzY3JpcHQgRGV2ZWxvcGVyXCI7XG4gICAgICAgIGRhdGEuc2FsYXJ5ID0gNDMzMDYwO1xuICAgICAgICBkYXRhLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAxMi8wMy8yOVwiKTtcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGRhdGEgPSBuZXcgRGF0YSgpO1xuICAgICAgICBkYXRhLm5hbWUgPSBcIkFpcmkgU2F0b3VcIjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiQWNjb3VudGFudFwiO1xuICAgICAgICBkYXRhLnNhbGFyeSA9IDE2MjcwMDtcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMDgvMTEvMjhcIik7XG4gICAgICAgIERBVEEucHVzaChkYXRhKTtcblxuICAgICAgICByZXR1cm4gREFUQTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG5cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBzYWxhcnk6IG51bWJlcjtcbiAgICBzdGFydERhdGU6IERhdGU7XG5cbn1cbiJdfQ==