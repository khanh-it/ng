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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// Configs
var configs_1 = require("../../configs");
// Components
var index_1 = require("../../components/app/index");
var index_2 = require("../../components/todo-list/index");
var index_3 = require("../../components/todo-create/index");
var index_4 = require("../../components/todo-edit/index");
var index_5 = require("../../components/todo-detail/index");
// Routing
var routing_1 = require("./routing");
// Services
var pouchdb_1 = require("../../services/pouchdb");
// +++ Repo(s)
var task_1 = require("../../services/repos/task");
// Pipes
var keys_1 = require("../../pipes/keys");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routing_1.AppRoutingModule],
        exports: [],
        declarations: [
            // Components
            index_1.AppComponent,
            index_2.TodoListComponent,
            index_3.TodoCreateComponent,
            index_4.TodoEditComponent,
            index_5.TodoDetailComponent,
            // .end#Components
            // Pipes
            keys_1.KeysPipe,
        ],
        providers: [
            // Application configs
            { provide: configs_1.APP_CONFIG, useValue: configs_1.app_configs },
            // .end#Application configs
            task_1.Task_RepoService, pouchdb_1.PouchDBService,
            AppModule
        ],
        bootstrap: [index_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map