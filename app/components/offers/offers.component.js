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
//rotut
var router_1 = require("@angular/router");
var OffersComponent = (function () {
    function OffersComponent(_route, _router, _PlaceService) {
        this._route = _route;
        this._router = _router;
        this._PlaceService = _PlaceService;
    }
    OffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PlaceService.getAllPlaces().subscribe(function (place) {
            _this.places = place;
            _this.fivePlaces = _this.places.slice(0, 6);
            console.log(_this.fivePlaces);
        });
    };
    return OffersComponent;
}());
OffersComponent = __decorate([
    core_1.Component({
        selector: 'offers',
        moduleId: module.id,
        templateUrl: 'offers.template.html',
        styleUrls: ['../../assets/css/style.css', '../../assets/css/offers.css'],
        providers: [place_service_1.PlaceService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        place_service_1.PlaceService])
], OffersComponent);
exports.OffersComponent = OffersComponent;
//# sourceMappingURL=offers.component.js.map