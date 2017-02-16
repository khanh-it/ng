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
var phpjs_service_1 = require("../../core/phpjs.service");
var Subject_1 = require("rxjs/Subject");
Object.defineProperty(window, 'RxSubject', { value: Subject_1.Subject });
var TestComponent = (function () {
    function TestComponent(_phpjsServ) {
        this._phpjsServ = _phpjsServ;
        this.oneAtATime = true;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    }
    TestComponent.prototype.addItem = function () {
        this.items.push("Items " + (this.items.length + 1));
    };
    TestComponent.prototype.ngOnInit = function () {
        console.log('this._pager: ', this._pager);
    };
    TestComponent.prototype.onPagerPageChanges = function (_a) {
        var page = _a.page, pager = _a.pager;
        console.log('page: ', page);
        console.log('pager: ', pager);
    };
    return TestComponent;
}());
__decorate([
    core_1.ViewChild('pager'),
    __metadata("design:type", Object)
], TestComponent.prototype, "_pager", void 0);
TestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-test',
        templateUrl: 'test.component.html',
        styleUrls: ['test.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [phpjs_service_1.PhpjsService])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map