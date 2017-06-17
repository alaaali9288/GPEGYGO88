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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var place_service_1 = require("../../service/place.service");
var PlaceComponent = (function () {
    function PlaceComponent(_PlaceService) {
        this._PlaceService = _PlaceService;
    }
    PlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PlaceService.getAllPlaces().subscribe(function (places) { _this.places = places; });
    };
    return PlaceComponent;
}());
PlaceComponent = __decorate([
    core_1.Component({
        selector: 'place',
        moduleId: module.id,
        templateUrl: 'place.template.html',
        styleUrls: ['../../assets/css/style.css', '../../assets/css/place.style.css', '../../assets/css/places.css'],
        providers: [place_service_1.PlaceService]
    }),
    __metadata("design:paramtypes", [place_service_1.PlaceService])
], PlaceComponent);
exports.PlaceComponent = PlaceComponent;
//# sourceMappingURL=place.component.js.map