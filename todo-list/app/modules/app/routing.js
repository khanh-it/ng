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
var router_1 = require("@angular/router");
var index_1 = require("../../components/todo-list/index");
var index_2 = require("../../components/todo-create/index");
var index_3 = require("../../components/todo-edit/index");
var index_4 = require("../../components/todo-detail/index");
var routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: index_1.TodoListComponent },
    { path: 'todo/list', component: index_1.TodoListComponent },
    { path: 'todo/create', component: index_2.TodoCreateComponent },
    { path: 'todo/edit/id/:id', component: index_3.TodoEditComponent },
    { path: 'todo/detail/id/:id', component: index_4.TodoDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=routing.js.map