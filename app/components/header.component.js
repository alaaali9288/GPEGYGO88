"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.logoPath = './app/components/images/';
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'EGYGO-Header',
        // template:'<h1>HEWDER</h1>'
        templateUrl: 'html/HeaderComponent.html',
        styleUrls: ['css/style.css',
            'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700',
            'css/reset.css',
            'css/fillterstyle.css',
            'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800',
            'css/jquery-ui.css',
            'css/zalki_hover_img.css']
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map