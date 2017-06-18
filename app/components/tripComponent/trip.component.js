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
var trip_service_1 = require("../../service/trip.service");
var place_service_1 = require("../../service/place.service");
var user_service_1 = require("../../service/user.service");
//rotut
var router_1 = require("@angular/router");
var TripContent = (function () {
    function TripContent(_TripService, _UserService, _route, _router, _PlaceService) {
        this._TripService = _TripService;
        this._UserService = _UserService;
        this._route = _route;
        this._router = _router;
        this._PlaceService = _PlaceService;
        this.range = [1, 2, 3, 4, 5];
    }
    TripContent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getTripById(id);
        });
    };
    TripContent.prototype.update = function (value) {
        this.rate = value;
        console.log(this.rate);
    };
    TripContent.prototype.getTripById = function (tId) {
        var _this = this;
        this._TripService.getTripById(tId).subscribe(function (trip) {
            _this.trip = trip[0];
            _this.activities = trip[0].activities;
            _this.placesID = trip[0].places;
            _this.tags = trip[0].tags;
            _this.tripPicsURLs = trip[0].tripPicsUrl;
            _this.uId = trip[0].userID;
            _this.getById(_this.uId);
            _this.uPlaces(_this.placesID);
            _this.reviews = _this.trip.reviews;
        });
    };
    TripContent.prototype.getById = function (id) {
        var _this = this;
        this._UserService.getById(id).subscribe(function (user) { _this.user = user; });
    };
    TripContent.prototype.uPlaces = function (Placess) {
        var _this = this;
        this.places = new Array();
        for (var _i = 0, Placess_1 = Placess; _i < Placess_1.length; _i++) {
            var placeId = Placess_1[_i];
            this._PlaceService.getplaceById(placeId).subscribe(function (place) {
                _this.places.push(place[0]);
                ;
                console.log(_this.places);
                ;
                console.log("Exo");
            });
        }
    };
    TripContent.prototype.addReview = function () {
        var Rev = {
            content: this.comment,
            DateTime: new Date(),
            isDelete: false,
            rate: this.rate,
            UserID: localStorage.getItem("UserId")
        };
        this.trip.reviews.push(Rev);
        this._TripService.updateTrip(this.trip).subscribe(function (data) { return JSON.stringify(data); });
        console.log(this.trip.reviews);
    };
    return TripContent;
}());
TripContent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "trip-page",
        templateUrl: "./trip.component.html",
        styles: ["\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css\";\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css\";\n    "],
        styleUrls: [
            "../../assets/css/bootstrap.min.css",
            "../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
            "../../assets/css/trip-style.css",
            "../../assets/css/checkboxStyle.css",
            "../../assets/css/rangeStyle.css",
            "../../assets/css/StartStyle.css",
            "../../assets/css/popUpStyle.css",
        ],
        providers: [user_service_1.UserService, trip_service_1.TripService, place_service_1.PlaceService],
    }),
    __metadata("design:paramtypes", [trip_service_1.TripService, user_service_1.UserService, router_1.ActivatedRoute, router_1.Router,
        place_service_1.PlaceService])
], TripContent);
exports.TripContent = TripContent;
//# sourceMappingURL=trip.component.js.map