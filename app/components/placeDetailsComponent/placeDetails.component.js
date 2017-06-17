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
var place_Service_1 = require("../../service/place.Service");
var trip_Service_1 = require("../../service/trip.Service");
var user_Service_1 = require("../../service/user.Service");
//rotut
var router_1 = require("@angular/router");
var PlaceDetails = (function () {
    function PlaceDetails(_PlaceService, _route, _router, _TripService, _UserService) {
        this._PlaceService = _PlaceService;
        this._route = _route;
        this._router = _router;
        this._TripService = _TripService;
        this._UserService = _UserService;
    }
    PlaceDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.placeID = id;
            _this.getPlaceById(id);
            _this.getTripByplaceID(id);
        });
    };
    PlaceDetails.prototype.getPlaceById = function (id) {
        var _this = this;
        this._PlaceService.getplaceById(id).subscribe(function (place) {
            _this.place = place[0];
            console.log("zafer");
            console.log(_this.place.userVisitedPlace.includes(id));
            console.log(_this.place);
        });
    };
    PlaceDetails.prototype.getTripByplaceID = function (id) {
        var _this = this;
        this.pID = new Array();
        this.pID.push(id);
        var placeid = {
            // place:["591cc3d142e8bc19745157bf"] 
            place: this.pID
        };
        this._TripService.getTripByplaceID(placeid).subscribe(function (data) {
            JSON.stringify(data);
            _this.tripsWithPlaces = data;
            console.log(_this.tripsWithPlaces);
            console.log("exo");
        });
    };
    // placesVisted() {
    //     // alert("Chen");
    //     var UID = localStorage.getItem("UserId");
    //     console.log(UID);
    //     this._UserService.updateVisitedPlaces(UID);
    // }
    PlaceDetails.prototype.updateUsrloVe = function () {
        var _this = this;
        var UID = localStorage.getItem("UserId");
        var user = this._UserService.getById(UID).subscribe(function (res) {
            _this.nor = res[0];
            _this.nor.userFavPlace.push(_this.placeID);
            _this._UserService.updateUser(_this.nor);
            console.log(_this.placeID);
            console.log("dne");
        });
    };
    PlaceDetails.prototype.updateUsrV = function () {
        var _this = this;
        var UID = localStorage.getItem("UserId");
        var user = this._UserService.getById(UID).subscribe(function (res) {
            _this.nor = res[0];
            _this.nor.userVisitedPlace.push(_this.placeID);
            _this._UserService.updateUser(_this.nor);
            console.log(_this.placeID);
            console.log("dne");
        });
    };
    return PlaceDetails;
}());
PlaceDetails = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "place-detail",
        templateUrl: "./placeDetails.component.html",
        styles: ["\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css\";\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css\";\n    "],
        styleUrls: ["../../assets/css/style.css",
            "../../assets/css/bootstrap.min.css",
            "../../assets/css/jquery.bxslider.css",
            "../../assets/css/jquery-ui.css",
            "../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
            "../../assets/css/jquery.bxslider.min.css",
            "../../assets/css/place_style.css",
            "../../assets/css/fwslider.css",
            "../../assets/css/animate.min.css", "../../assets/css/lightbox.min.css",
        ], providers: [place_Service_1.PlaceService, trip_Service_1.TripService, user_Service_1.UserService]
    }),
    __metadata("design:paramtypes", [place_Service_1.PlaceService, router_1.ActivatedRoute, router_1.Router,
        trip_Service_1.TripService, user_Service_1.UserService])
], PlaceDetails);
exports.PlaceDetails = PlaceDetails;
//# sourceMappingURL=placeDetails.component.js.map