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
var router_1 = require('@angular/router');
var authentication_component_1 = require('../../services/login.service/authentication.component');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var radio_1 = require('@angular2-material/radio/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(auth, router, locale, localization) {
        _super.call(this, locale, localization);
        this.auth = auth;
        this.router = router;
        this.locale = locale;
        this.localization = localization;
        this.model = {
            search: ""
        };
        this.user = { username: "test",
            password: "test"
        };
        this.error = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.user.username, this.user.password)
            .subscribe(function (token) {
            _this.router.navigate(['/home']);
        }, function () {
            _this.error = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [radio_dispatcher_1.MdRadioDispatcher, authentication_component_1.AuthenticationComponent],
            pipes: [angular2localization_2.TranslatePipe],
            directives: [card_1.MD_CARD_DIRECTIVES, radio_1.MdRadioButton, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton],
            templateUrl: 'app/components/login.component/login.html'
        }), 
        __metadata('design:paramtypes', [authentication_component_1.AuthenticationComponent, router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], LoginComponent);
    return LoginComponent;
}(angular2localization_1.Locale));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyx5Q0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUU5RixZQUFZO0FBQ1oscUNBQXlELDJDQUEyQyxDQUFDLENBQUE7QUFFckcsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHNCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRW5ELFNBQVM7QUFDVCxxQ0FBNEIsMkNBQTJDLENBQUMsQ0FBQTtBQVV4RTtJQUFvQyxrQ0FBTTtJQVd0Qyx3QkFBbUIsSUFBNkIsRUFDN0IsTUFBYyxFQUNkLE1BQXFCLEVBQ3JCLFlBQWlDO1FBQ2hELGtCQUFNLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpiLFNBQUksR0FBSixJQUFJLENBQXlCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQVo3QyxVQUFLLEdBQUc7WUFDWCxNQUFNLEVBQUMsRUFBRTtTQUNaLENBQUE7UUFDTSxTQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUcsTUFBTTtZQUM3QixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBQ0YsVUFBSyxHQUFZLEtBQUssQ0FBQztJQVN2QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEQsU0FBUyxDQUNOLFVBQUMsS0FBVTtZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0Q7WUFDSSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLENBQUMsb0NBQWlCLEVBQUUsa0RBQXVCLENBQUM7WUFDdkQsS0FBSyxFQUFFLENBQUMsb0NBQWEsQ0FBQztZQUN0QixVQUFVLEVBQUUsQ0FBQyx5QkFBa0IsRUFBRSxxQkFBYSxFQUFFLDJCQUFtQixFQUFFLGlCQUFRLENBQUM7WUFDOUUsV0FBVyxFQUFFLDJDQUEyQztTQUMzRCxDQUFDOztzQkFBQTtJQWlDRixxQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBb0MsNkJBQU0sR0ErQnpDO0FBL0JZLHNCQUFjLGlCQStCMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9naW4uc2VydmljZS9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlcy5cbmltcG9ydCB7TG9jYWxlLCBMb2NhbGVTZXJ2aWNlLCBMb2NhbGl6YXRpb25TZXJ2aWNlfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XG5cbi8vIEFuZ3VsYXIgMiBNYXRlcmlhbC5cbmltcG9ydCB7TURfQ0FSRF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01kUmFkaW9CdXR0b259IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpbyc7XG5pbXBvcnQge01kUmFkaW9EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8vcmFkaW9fZGlzcGF0Y2hlcic7XG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcblxuLy8gUGlwZXMuXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXG4gICAgcHJvdmlkZXJzOiBbTWRSYWRpb0Rpc3BhdGNoZXIsIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdLFxuICAgIGRpcmVjdGl2ZXM6IFtNRF9DQVJEX0RJUkVDVElWRVMsIE1kUmFkaW9CdXR0b24sIE1EX0lOUFVUX0RJUkVDVElWRVMsIE1kQnV0dG9uXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgTG9jYWxle1xuXG4gICAgcHVibGljIG1vZGVsID0ge1xuICAgICAgICBzZWFyY2g6XCJcIlxuICAgIH1cbiAgICBwdWJsaWMgdXNlciA9IHsgdXNlcm5hbWUgOiBcInRlc3RcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwidGVzdFwiXG4gICAgfTtcbiAgICBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogQXV0aGVudGljYXRpb25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHVibGljIGxvY2FsaXphdGlvbjogTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihsb2NhbGUsIGxvY2FsaXphdGlvbik7XG5cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlci51c2VybmFtZSwgdGhpcy51c2VyLnBhc3N3b3JkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAodG9rZW46IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==