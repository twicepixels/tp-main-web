webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(2);
	// Providers
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(325);
	var app_routes_1 = __webpack_require__(346);
	// Components
	var auth_service_1 = __webpack_require__(650);
	var main_component_1 = __webpack_require__(651);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, [
	    auth_service_1.AuthService,
	    http_1.HTTP_PROVIDERS,
	    app_routes_1.APP_ROUTER_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	]).catch(function (err) { return console.error(err); });


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(347);
	// Routes
	var navbar_routes_1 = __webpack_require__(403);
	exports.routes = navbar_routes_1.NavbarRoutes.slice();
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_component_1 = __webpack_require__(404);
	var i18n_component_1 = __webpack_require__(417);
	var list_component_1 = __webpack_require__(424);
	var login_component_1 = __webpack_require__(426);
	var validation_component_1 = __webpack_require__(649);
	exports.NavbarRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'i18n', component: i18n_component_1.I18nComponent },
	    { path: 'list', component: list_component_1.ListComponent },
	    { path: 'login', component: login_component_1.LoginComponent },
	    { path: 'validation', component: validation_component_1.ValidationComponent }
	];


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	// Angular 2 Material.
	var card_1 = __webpack_require__(405);
	// Services.
	var angular2localization_1 = __webpack_require__(406);
	// Pipes.
	var angular2localization_2 = __webpack_require__(406);
	var angular2localization_3 = __webpack_require__(406);
	var angular2localization_4 = __webpack_require__(406);
	var HomeComponent = (function (_super) {
	    __extends(HomeComponent, _super);
	    function HomeComponent(locale, localization) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.today = Date.now();
	        this.pi = 3.14159;
	        this.a = Math.round(Math.random() * 100) / 100;
	        this.b = Math.round(Math.random() * 1000000) / 100;
	        this.intlSupport = angular2localization_1.IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
	            && angular2localization_1.IntlSupport.NumberFormat(this.locale.getDefaultLocale())
	            && angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/components/temp/home.component.html',
	            pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDatePipe, angular2localization_4.LocaleDecimalPipe, angular2localization_4.LocalePercentPipe, angular2localization_4.LocaleCurrencyPipe],
	            directives: [card_1.MD_CARD_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
	    ], HomeComponent);
	    return HomeComponent;
	}(angular2localization_1.Locale));
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	// Angular 2 Material.
	var card_1 = __webpack_require__(405);
	var radio_1 = __webpack_require__(418);
	var radio_dispatcher_1 = __webpack_require__(419);
	var input_1 = __webpack_require__(420);
	var button_1 = __webpack_require__(423);
	// Services.
	var angular2localization_1 = __webpack_require__(406);
	// Pipes.
	var angular2localization_2 = __webpack_require__(406);
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
	            templateUrl: './app/components/temp/i18n.component.html',
	            providers: [radio_dispatcher_1.MdRadioDispatcher],
	            pipes: [angular2localization_2.TranslatePipe],
	            directives: [card_1.MD_CARD_DIRECTIVES, radio_1.MdRadioButton, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
	    ], I18nComponent);
	    return I18nComponent;
	}(angular2localization_1.Locale));
	exports.I18nComponent = I18nComponent;


/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	// Angular 2 Material.
	var card_1 = __webpack_require__(405);
	var list_1 = __webpack_require__(425);
	var button_1 = __webpack_require__(423);
	var input_1 = __webpack_require__(420);
	// Services.
	var angular2localization_1 = __webpack_require__(406);
	// Pipes.
	var angular2localization_2 = __webpack_require__(406);
	var angular2localization_3 = __webpack_require__(406);
	var angular2localization_4 = __webpack_require__(406);
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


/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(347);
	var authentication_component_1 = __webpack_require__(427);
	// Services.
	var angular2localization_1 = __webpack_require__(406);
	// Angular 2 Material.
	var card_1 = __webpack_require__(405);
	var radio_1 = __webpack_require__(418);
	var radio_dispatcher_1 = __webpack_require__(419);
	var input_1 = __webpack_require__(420);
	var button_1 = __webpack_require__(423);
	// Pipes.
	var angular2localization_2 = __webpack_require__(406);
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
	            templateUrl: 'app/components/login/login.html'
	        }), 
	        __metadata('design:paramtypes', [authentication_component_1.AuthenticationComponent, router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
	    ], LoginComponent);
	    return LoginComponent;
	}(angular2localization_1.Locale));
	exports.LoginComponent = LoginComponent;


/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Observable_1 = __webpack_require__(38);
	__webpack_require__(428);
	//import 'rxjs/add/operator/share';
	//import 'rxjs/add/operator/map';
	var AuthenticationComponent = (function () {
	    function AuthenticationComponent() {
	        this.token = localStorage.getItem('token');
	    }
	    AuthenticationComponent.prototype.login = function (username, password) {
	        /*
	         * If we had a login api, we would have done something like this
	
	         return this.http.post('/auth/login', JSON.stringify({
	         username: username,
	         password: password
	         }), {
	         headers: new Headers({
	         'Content-Type': 'application/json'
	         })
	         })
	         .map((res : any) => {
	         let data = res.json();
	         this.token = data.token;
	         localStorage.setItem('token', this.token);
	         });
	
	         for the purpose of this cookbook, we will juste simulate that
	         */
	        //console.log('from authentication:'+username);
	        //console.log(password);
	        if (username === 'test' && password === 'test') {
	            this.token = 'token';
	            localStorage.setItem('token', this.token);
	            return Observable_1.Observable.of('token');
	        }
	        return Observable_1.Observable.throw('authentication failure');
	    };
	    AuthenticationComponent.prototype.logout = function () {
	        /*
	         * If we had a login api, we would have done something like this
	
	         return this.http.get(this.config.serverUrl + '/auth/logout', {
	         headers: new Headers({
	         'x-security-token': this.token
	         })
	         })
	         .map((res : any) => {
	         this.token = undefined;
	         localStorage.removeItem('token');
	         });
	         */
	        this.token = undefined;
	        localStorage.removeItem('token');
	        return Observable_1.Observable.of(true);
	    };
	    AuthenticationComponent = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AuthenticationComponent);
	    return AuthenticationComponent;
	}());
	exports.AuthenticationComponent = AuthenticationComponent;


/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	// FormBuilder with NgFormControl.
	var common_1 = __webpack_require__(2);
	// Angular 2 Material.
	var card_1 = __webpack_require__(405);
	var input_1 = __webpack_require__(420);
	var button_1 = __webpack_require__(423);
	// Services.
	var angular2localization_1 = __webpack_require__(406);
	// Pipes.
	var angular2localization_2 = __webpack_require__(406);
	var angular2localization_3 = __webpack_require__(406);
	// Directives for FormBuilder with NgFormControl.
	var angular2localization_4 = __webpack_require__(406);
	// Directives for NgControl.
	/*import {LocaleNumberValidator} from 'angular2localization/angular2localization';*/
	var ValidationComponent = (function (_super) {
	    __extends(ValidationComponent, _super);
	    function ValidationComponent(locale, localization, fb) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.fb = fb;
	        this.value = "";
	        // Options.
	        this.digits = "1.2-2";
	        this.minValue = -Math.round(Math.random() * 10000) / 100;
	        this.maxValue = Math.round(Math.random() * 10000) / 100;
	        this.parsedValue = null;
	        this.numberForm = fb.group({
	            'decimal': ['', angular2localization_4.validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
	        });
	    }
	    ValidationComponent.prototype.onSubmit = function (value) {
	        this.parsedValue = angular2localization_1.LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());
	    };
	    ValidationComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/components/temp/validation.component.html',
	            pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDecimalPipe],
	            directives: [angular2localization_4.LocaleNumberValidator, card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, common_1.FormBuilder])
	    ], ValidationComponent);
	    return ValidationComponent;
	}(angular2localization_1.Locale));
	exports.ValidationComponent = ValidationComponent;


/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Observable_1 = __webpack_require__(38);
	__webpack_require__(428);
	//import 'rxjs/add/operator/share';
	//import 'rxjs/add/operator/map';
	var AuthService = (function () {
	    function AuthService() {
	        this.token = localStorage.getItem('token');
	    }
	    AuthService.prototype.login = function (username, password) {
	        /*
	         * If we had a login api, we would have done something like this
	
	         return this.http.post('/auth/login', JSON.stringify({
	         username: username,
	         password: password
	         }), {
	         headers: new Headers({
	         'Content-Type': 'application/json'
	         })
	         })
	         .map((res : any) => {
	         let data = res.json();
	         this.token = data.token;
	         localStorage.setItem('token', this.token);
	         });
	
	         for the purpose of this cookbook, we will juste simulate that
	         */
	        //console.log('from authentication:'+username);
	        //console.log(password);
	        if (username === 'test' && password === 'test') {
	            this.token = 'token';
	            localStorage.setItem('token', this.token);
	            return Observable_1.Observable.of('token');
	        }
	        return Observable_1.Observable.throw('authentication failure');
	    };
	    AuthService.prototype.logout = function () {
	        /*
	         * If we had a login api, we would have done something like this
	
	         return this.http.get(this.config.serverUrl + '/auth/logout', {
	         headers: new Headers({
	         'x-security-token': this.token
	         })
	         })
	         .map((res : any) => {
	         this.token = undefined;
	         localStorage.removeItem('token');
	         });
	         */
	        this.token = undefined;
	        localStorage.removeItem('token');
	        return Observable_1.Observable.of(true);
	    };
	    AuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AuthService);
	    return AuthService;
	}());
	exports.AuthService = AuthService;


/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(347);
	// Angular 2 Material.
	var toolbar_1 = __webpack_require__(652);
	var list_1 = __webpack_require__(425);
	var sidenav_1 = __webpack_require__(653);
	var angular2localization_1 = __webpack_require__(406);
	// Components
	var navbar_component_1 = __webpack_require__(656);
	// Services
	var language_service_1 = __webpack_require__(657);
	var MainComponent = (function (_super) {
	    __extends(MainComponent, _super);
	    function MainComponent(locale, localization) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        language_service_1.LanguageService.addScope(this.locale, this.localization);
	    }
	    MainComponent.prototype.ngOnInit = function () {
	        // this.router.navigate(['/home']);
	    };
	    MainComponent = __decorate([
	        core_1.Component({
	            selector: 'main-application',
	            templateUrl: 'app/shared/template/page/main.component.html',
	            directives: [
	                toolbar_1.MdToolbar,
	                navbar_component_1.NavbarComponent,
	                router_1.ROUTER_DIRECTIVES,
	                list_1.MD_LIST_DIRECTIVES,
	                sidenav_1.MD_SIDENAV_DIRECTIVES
	            ],
	            providers: [
	                angular2localization_1.LocaleService,
	                language_service_1.LanguageService,
	                angular2localization_1.LocalizationService
	            ],
	            pipes: [angular2localization_1.TranslatePipe]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
	    ], MainComponent);
	    return MainComponent;
	}(angular2localization_1.Locale));
	exports.MainComponent = MainComponent;


/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(347);
	var angular2localization_1 = __webpack_require__(406);
	var language_service_1 = __webpack_require__(657);
	var NavbarComponent = (function (_super) {
	    __extends(NavbarComponent, _super);
	    function NavbarComponent(locale, localization) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.langSelected = {};
	        this.getLanguages();
	        language_service_1.LanguageService.addScope(this.locale, this.localization);
	    }
	    NavbarComponent.prototype.getCurrentCountry = function () {
	        return this.locale.getCurrentCountry();
	    };
	    NavbarComponent.prototype.getLanguages = function () {
	        var _this = this;
	        language_service_1.LanguageService.getLanguages()
	            .then(function (languages) { return _this.languages = languages; })
	            .then(function () { return _this.selectLocale(_this.languages[0]); });
	    };
	    NavbarComponent.prototype.selectLocale = function (language) {
	        this.langSelected = language;
	        language_service_1.LanguageService.translate(language);
	    };
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-bar',
	            templateUrl: 'app/shared/template/navbar/navbar.component.html',
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, language_service_1.LanguageService],
	            pipes: [angular2localization_1.TranslatePipe]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
	    ], NavbarComponent);
	    return NavbarComponent;
	}(angular2localization_1.Locale));
	exports.NavbarComponent = NavbarComponent;


/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var languages_data_1 = __webpack_require__(658);
	var LanguageService = (function () {
	    function LanguageService() {
	    }
	    LanguageService.getLanguages = function () {
	        return Promise.resolve(languages_data_1.LANGUAGES);
	    };
	    LanguageService.addScope = function (locale, localization) {
	        locale.addLanguage('en');
	        locale.addLanguage('es');
	        locale.definePreferredCurrency('USD');
	        locale.definePreferredLocale('en', 'US', 30);
	        // Required: initializes the translation provider.
	        localization.translationProvider(this.getProvider());
	        // Need to update the translation.
	        localization.updateTranslation();
	        this.scopes.push({
	            locale: locale,
	            localization: localization
	        });
	    };
	    LanguageService.translate = function (language) {
	        var provider = this.getProvider;
	        this.scopes.forEach(function (scope) {
	            scope.locale.setCurrentCurrency(language.currency);
	            scope.locale.setCurrentLocale(language.id, language.isoCode);
	            scope.localization.translationProvider(provider());
	        });
	    };
	    LanguageService.getProvider = function () {
	        //'./app/I18n/{locale}/locale-'
	        return './app/I18n/locale-';
	    };
	    ;
	    LanguageService.scopes = [];
	    LanguageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], LanguageService);
	    return LanguageService;
	}());
	exports.LanguageService = LanguageService;


/***/ },

/***/ 658:
/***/ function(module, exports) {

	"use strict";
	exports.LANGUAGES = [
	    { id: 'en', name: 'English', isoCode: 'US', currency: 'USD' },
	    { id: 'es', name: 'Español', isoCode: 'CR', currency: 'CRC' },
	];


/***/ }

});
//# sourceMappingURL=app.bundle.js.map