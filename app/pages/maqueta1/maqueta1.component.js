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
var Maqueta1Component = (function () {
    function Maqueta1Component() {
        this.name = 'Maqueta1';
        this.thumbnails = [
            { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }
        ];
    }
    Maqueta1Component = __decorate([
        core_1.Component({
            selector: 'page-maqueta',
            templateUrl: 'app/pages/maqueta1/maqueta1.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Maqueta1Component);
    return Maqueta1Component;
}());
exports.Maqueta1Component = Maqueta1Component;
//# sourceMappingURL=maqueta1.component.js.map