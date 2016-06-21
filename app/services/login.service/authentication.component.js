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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUVqQixtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBR2pDO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHVDQUFLLEdBQUwsVUFBTSxRQUFnQixFQUFFLFFBQWdCO1FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FrQkc7UUFHSCwrQ0FBK0M7UUFDL0Msd0JBQXdCO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDSTs7Ozs7Ozs7Ozs7O1dBWUc7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBOURMO1FBQUMsaUJBQVUsRUFBRTs7K0JBQUE7SUErRGIsOEJBQUM7QUFBRCxDQUFDLEFBOURELElBOERDO0FBOURZLCtCQUF1QiwwQkE4RG5DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuLy9pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbi8vaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuICAgIHRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXJuYW1lOiBTdHJpbmcsIHBhc3N3b3JkOiBTdHJpbmcpOmFueSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHdlIGhhZCBhIGxvZ2luIGFwaSwgd2Ugd291bGQgaGF2ZSBkb25lIHNvbWV0aGluZyBsaWtlIHRoaXNcblxuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXV0aC9sb2dpbicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgfSksIHtcbiAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgIH0pXG4gICAgICAgICB9KVxuICAgICAgICAgLm1hcCgocmVzIDogYW55KSA9PiB7XG4gICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICB0aGlzLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgICAgfSk7XG5cbiAgICAgICAgIGZvciB0aGUgcHVycG9zZSBvZiB0aGlzIGNvb2tib29rLCB3ZSB3aWxsIGp1c3RlIHNpbXVsYXRlIHRoYXRcbiAgICAgICAgICovXG5cblxuICAgICAgICAvL2NvbnNvbGUubG9nKCdmcm9tIGF1dGhlbnRpY2F0aW9uOicrdXNlcm5hbWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhc3N3b3JkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gJ3Rlc3QnICYmIHBhc3N3b3JkID09PSAndGVzdCcpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSAndG9rZW4nO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigndG9rZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdhdXRoZW50aWNhdGlvbiBmYWlsdXJlJyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogSWYgd2UgaGFkIGEgbG9naW4gYXBpLCB3ZSB3b3VsZCBoYXZlIGRvbmUgc29tZXRoaW5nIGxpa2UgdGhpc1xuXG4gICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZy5zZXJ2ZXJVcmwgKyAnL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgJ3gtc2VjdXJpdHktdG9rZW4nOiB0aGlzLnRva2VuXG4gICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICAgICAgIC5tYXAoKHJlcyA6IGFueSkgPT4ge1xuICAgICAgICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgfSk7XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRydWUpO1xuICAgIH1cbn0iXX0=