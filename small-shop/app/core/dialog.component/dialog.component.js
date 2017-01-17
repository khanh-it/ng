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
var translator_service_1 = require("../translator.service");
var DialogComponent = DialogComponent_1 = (function () {
    function DialogComponent(transServ) {
        this.transServ = transServ;
    }
    DialogComponent.prototype.ngOnInit = function () {
        ++DialogComponent_1._componentLoaded;
        if (DialogComponent_1._componentLoaded) {
            throw new Error('DialogComponent should be loaded only one time!');
        }
    };
    DialogComponent.prototype.ngAfterViewInit = function () {
        if (!DialogComponent_1._$eleAlert) {
            DialogComponent_1._$eleAlert = $(this.eleAlert.nativeElement);
        }
        if (!DialogComponent_1._$eleConfirm) {
            DialogComponent_1._$eleConfirm = $(this.eleConfirm.nativeElement);
        }
        if (!DialogComponent_1._$elePrompt) {
            DialogComponent_1._$elePrompt = $(this.elePrompt.nativeElement);
        }
    };
    DialogComponent.prototype.alert = function (msg) {
        return new Promise(function (rs, rj) {
            DialogComponent_1._$eleAlert
                .attr('hidden', false)
                .find('.app-dialog-body').text('' + msg).end()
                .find('button.btn-ok')
                .one('click', function () {
                DialogComponent_1._$eleAlert.attr('hidden', true);
                rs(null);
            })
                .focus()
                .end();
        });
    };
    DialogComponent.prototype.confirm = function (msg) {
        return new Promise(function (rs, rj) {
            DialogComponent_1._$eleConfirm
                .attr('hidden', false)
                .find('.app-dialog-body').text('' + msg).end()
                .find('button.btn-cancel').one('click', function () {
                rs(!DialogComponent_1._$eleConfirm.attr('hidden', true));
            }).end()
                .find('button.btn-ok')
                .one('click', function () {
                rs(!!DialogComponent_1._$eleConfirm.attr('hidden', true));
            })
                .focus()
                .end();
        });
    };
    DialogComponent.prototype.prompt = function (msg, txt) {
        return new Promise(function (rs, rj) {
            var $eleInput = DialogComponent_1._$elePrompt
                .find('.app-dialog-body > input[type="text"]')
                .val('' + txt);
            DialogComponent_1._$elePrompt
                .attr('hidden', false)
                .find('.app-dialog-body > span').text('' + msg).end()
                .find('button.btn-ok, button.btn-cancel')
                .one('click', function () {
                var $this = jQuery(this);
                var rt = $this.is('button.btn-cancel') ? null : $eleInput.val();
                DialogComponent_1._$elePrompt.attr('hidden', true);
                rs(rt);
            })
                .focus()
                .end();
        });
    };
    return DialogComponent;
}());
DialogComponent._componentLoaded = -1;
__decorate([
    core_1.ViewChild('eleAlert'),
    __metadata("design:type", core_1.ElementRef)
], DialogComponent.prototype, "eleAlert", void 0);
__decorate([
    core_1.ViewChild('eleConfirm'),
    __metadata("design:type", core_1.ElementRef)
], DialogComponent.prototype, "eleConfirm", void 0);
__decorate([
    core_1.ViewChild('elePrompt'),
    __metadata("design:type", core_1.ElementRef)
], DialogComponent.prototype, "elePrompt", void 0);
DialogComponent = DialogComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html',
        styleUrls: ['dialog.component.css']
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService])
], DialogComponent);
exports.DialogComponent = DialogComponent;
var DialogComponent_1;
//# sourceMappingURL=dialog.component.js.map