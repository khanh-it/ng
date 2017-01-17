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
var router_1 = require('@angular/router');
// Services
//import { PhpjsService } from '../phpjs.service';
var translator_service_1 = require('../translator.service');
//import { DialogComponent } from '../dialog.component/dialog.component';
var user_repo_service_1 = require('../user-repo.service');
var LogoutComponent /*implements OnInit*/ = (function () {
    function LogoutComponent /*implements OnInit*/(
        //protected _phpjsServ: PhpjsService,
        transServ, _router, _route, _userRepoServ) {
        this.transServ = transServ;
        this._router = _router;
        this._route = _route;
        this._userRepoServ = _userRepoServ;
        // Check if user logged in, then redirect to home page
        this._logout();
    }
    //ngOnInit() {}
    /**
     * Logout user
     */
    LogoutComponent /*implements OnInit*/.prototype._logout = function () {
        // Erase session
        this._userRepoServ.setLoggedInUser(null);
        // Redirect to home page!
        this._router.navigate(['/login', { 'logoutRdr': 1 }], {
            relativeTo: this._route,
            queryParams: {}
        });
    };
    LogoutComponent /*implements OnInit*/ = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-logout',
            template: '',
        }), 
        __metadata('design:paramtypes', [translator_service_1.TranslatorService, router_1.Router, router_1.ActivatedRoute, user_repo_service_1.UserRepoService])
    ], LogoutComponent /*implements OnInit*/);
    return LogoutComponent /*implements OnInit*/;
}());
exports.LogoutComponent /*implements OnInit*/ = LogoutComponent /*implements OnInit*/;
//# sourceMappingURL=logout.component.js.map