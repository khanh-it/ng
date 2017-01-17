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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var app_config_1 = require("../app-config");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_routing_module_1 = require("./core-routing.module");
var app_component_1 = require("./app.component/app.component");
exports.AppComponent = app_component_1.AppComponent;
var nav_component_1 = require("./nav.component/nav.component");
var dashboard_component_1 = require("./dashboard.component/dashboard.component");
var login_component_1 = require("./login.component/login.component");
var logout_component_1 = require("./logout.component/logout.component");
var page_404_component_1 = require("./page-404.component/page-404.component");
var dialog_component_1 = require("./dialog.component/dialog.component");
var phpjs_service_1 = require("./phpjs.service");
var translator_service_1 = require("./translator.service");
var pouchdb_db_service_1 = require("./db.service/pouchdb-db.service");
var auth_check_service_1 = require("./auth-check.service");
var user_repo_service_1 = require("./user-repo.service");
var CoreModule = (function () {
    function CoreModule(parentModule, _authCheckServ) {
        this._authCheckServ = _authCheckServ;
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        this._authCheckServ.setIgnores(app_config_1.app_config['auth-service'].ignores);
        this.init();
    }
    CoreModule.prototype.init = function () { };
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            core_routing_module_1.CoreRoutingModule,
        ],
        exports: [],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            dashboard_component_1.DashboardComponent,
            login_component_1.LoginComponent,
            logout_component_1.LogoutComponent,
            page_404_component_1.Page404Component,
            dialog_component_1.DialogComponent,
        ],
        providers: [
            phpjs_service_1.PhpjsService,
            translator_service_1.TranslatorService,
            pouchdb_db_service_1.PouchdbDbService,
            auth_check_service_1.AuthCheckService,
            user_repo_service_1.UserRepoService,
            dialog_component_1.DialogComponent
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule,
        auth_check_service_1.AuthCheckService])
], CoreModule);
exports.CoreModule = CoreModule;
pouchdb_db_service_1.PouchdbDbService.setDefaultConfig(app_config_1.app_config.db);
//# sourceMappingURL=core.module.js.map