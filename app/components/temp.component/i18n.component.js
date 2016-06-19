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
var radio_1 = require('@angular2-material/radio/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var I18nComponent = (function (_super) {
    __extends(I18nComponent, _super);
    function I18nComponent(localization) {
        _super.call(this, null, localization);
        this.localization = localization;
        this.message = "";
        this.gender = "";
        this.inviteMapping = {
            'male': 'Invite_him',
            'female': 'Invite_her'
        };
        this.messages = [];
        this.messageMapping = {
            '=0': 'No_messages',
            '=1': 'One_message',
            'other': '# messages'
        };
    }
    I18nComponent.prototype.addMessage = function (message) {
        this.messages.push(message);
        this.message = "";
    };
    I18nComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/temp.component/i18n.component.html',
            providers: [radio_dispatcher_1.MdRadioDispatcher],
            pipes: [angular2localization_2.TranslatePipe],
            directives: [card_1.MD_CARD_DIRECTIVES, radio_1.MdRadioButton, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
    ], I18nComponent);
    return I18nComponent;
}(angular2localization_1.Locale));
exports.I18nComponent = I18nComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpMThuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHNCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELFlBQVk7QUFDWixxQ0FBMEMsMkNBQTJDLENBQUMsQ0FBQTtBQUN0RixTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFTeEU7SUFBbUMsaUNBQU07SUFpQnJDLHVCQUFtQixZQUFpQztRQUNoRCxrQkFBTSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEWCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFmcEQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQVE7WUFDakIsTUFBTSxFQUFFLFlBQVk7WUFDcEIsUUFBUSxFQUFFLFlBQVk7U0FDekIsQ0FBQTtRQUVELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsbUJBQWMsR0FBUTtZQUNsQixJQUFJLEVBQUUsYUFBYTtZQUNuQixJQUFJLEVBQUUsYUFBYTtZQUNuQixPQUFPLEVBQUUsWUFBWTtTQUN4QixDQUFBO0lBSUQsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxPQUFlO1FBRXRCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFqQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsV0FBVyxFQUFFLHFEQUFxRDtZQUNsRSxTQUFTLEVBQUUsQ0FBQyxvQ0FBaUIsQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxvQ0FBYSxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLHlCQUFrQixFQUFFLHFCQUFhLEVBQUUsMkJBQW1CLEVBQUUsaUJBQVEsQ0FBQztTQUNqRixDQUFDOztxQkFBQTtJQThCRixvQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBbUMsNkJBQU0sR0E0QnhDO0FBNUJZLHFCQUFhLGdCQTRCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFuZ3VsYXIgMiBNYXRlcmlhbC5cbmltcG9ydCB7TURfQ0FSRF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01kUmFkaW9CdXR0b259IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpbyc7XG5pbXBvcnQge01kUmFkaW9EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8vcmFkaW9fZGlzcGF0Y2hlcic7XG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcbi8vIFNlcnZpY2VzLlxuaW1wb3J0IHtMb2NhbGUsIExvY2FsaXphdGlvblNlcnZpY2V9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcbi8vIFBpcGVzLlxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy90ZW1wLmNvbXBvbmVudC9pMThuLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtNZFJhZGlvRGlzcGF0Y2hlcl0sXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXSxcbiAgICBkaXJlY3RpdmVzOiBbTURfQ0FSRF9ESVJFQ1RJVkVTLCBNZFJhZGlvQnV0dG9uLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBNZEJ1dHRvbl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJMThuQ29tcG9uZW50IGV4dGVuZHMgTG9jYWxlIHtcblxuICAgIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBnZW5kZXI6IHN0cmluZyA9IFwiXCI7XG4gICAgaW52aXRlTWFwcGluZzogYW55ID0ge1xuICAgICAgICAnbWFsZSc6ICdJbnZpdGVfaGltJyxcbiAgICAgICAgJ2ZlbWFsZSc6ICdJbnZpdGVfaGVyJ1xuICAgIH1cblxuICAgIG1lc3NhZ2VzOiBhbnkgPSBbXTtcbiAgICBtZXNzYWdlTWFwcGluZzogYW55ID0ge1xuICAgICAgICAnPTAnOiAnTm9fbWVzc2FnZXMnLFxuICAgICAgICAnPTEnOiAnT25lX21lc3NhZ2UnLFxuICAgICAgICAnb3RoZXInOiAnIyBtZXNzYWdlcydcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKG51bGwsIGxvY2FsaXphdGlvbik7XG4gICAgfVxuXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG5cbiAgICB9XG5cbn0iXX0=