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
// Configs
//import { AppConfigInterface,  APP_CONFIG } from '../../configs';
// Module(s)
//import { AppModule } from '../../modules/app/index';
// Services
var translator_service_1 = require('../translator.service');
var user_repo_service_1 = require('../user-repo.service');
var NavComponent = (function () {
    function NavComponent(transServ, _userRepoServ) {
        this.transServ = transServ;
        this._userRepoServ = _userRepoServ;
        /** */
        this.isOpen = true;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        this._userRepoServ.getLoggedInUser().then(function (user) {
            _this._user = user;
        });
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nav',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.css'],
        }), 
        __metadata('design:paramtypes', [translator_service_1.TranslatorService, user_repo_service_1.UserRepoService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map