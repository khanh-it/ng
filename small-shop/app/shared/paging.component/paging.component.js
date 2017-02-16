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
var PagingComponent = (function () {
    function PagingComponent() {
        this._totalItems = 0;
        this._itemsPerPage = self.defaultItemsPerPage;
        this._currentPage = 1;
        this.onPageChanges = new core_1.EventEmitter();
    }
    Object.defineProperty(PagingComponent, "defaultItemsPerPage", {
        get: function () {
            return self._defaultItemsPerPage;
        },
        set: function (itemsPerPage) {
            if (itemsPerPage < 0) {
                itemsPerPage = 0;
            }
            self._defaultItemsPerPage = itemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingComponent.prototype, "totalItems", {
        get: function () {
            return this._totalItems;
        },
        set: function (totalItems) {
            this._totalItems = totalItems;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PagingComponent.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (itemsPerPage) {
            if (itemsPerPage <= 0) {
                itemsPerPage = 1;
            }
            this._itemsPerPage = itemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PagingComponent.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (currentPage) {
            var pages = this.totalPages.length;
            if (currentPage > pages) {
                currentPage = pages;
            }
            if (currentPage < 0) {
                currentPage = 0;
            }
            this._currentPage = currentPage;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PagingComponent.prototype, "totalPages", {
        get: function () {
            var pages = Math.ceil(this._totalItems / this._itemsPerPage);
            var totalPages = [];
            for (var i = 1; i <= pages; i++) {
                totalPages.push(i);
            }
            return totalPages;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PagingComponent.prototype, "offset", {
        get: function () {
            return (this._currentPage - 1) * this._itemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    PagingComponent.prototype.go = function (page) {
        this.currentPage = page;
        this.onPageChanges.emit({
            'page': page,
            'offset': this.offset,
            'pager': this
        });
    };
    PagingComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        console.log('totalItems: ', this.totalItems);
        console.log('itemsPerPage: ', this.itemsPerPage);
        console.log('totalPages: ', this.totalPages);
        console.log('currentPage: ', this.currentPage);
    };
    return PagingComponent;
}());
PagingComponent._defaultItemsPerPage = 50;
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PagingComponent.prototype, "totalItems", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PagingComponent.prototype, "itemsPerPage", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PagingComponent.prototype, "currentPage", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PagingComponent.prototype, "onPageChanges", void 0);
PagingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-paging',
        templateUrl: 'paging.component.html',
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);
exports.PagingComponent = PagingComponent;
var self = PagingComponent;
//# sourceMappingURL=paging.component.js.map