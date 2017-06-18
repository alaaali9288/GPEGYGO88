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
        this.UID = localStorage.getItem("UserId");
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
            _this.checkVistedPlaces(id);
            _this.checkifLovedPlace(id);
            //.userVisitedPlace.includes(id)
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
    PlaceDetails.prototype.checkVistedPlaces = function (id) {
        var _this = this;
        // var UID = localStorage.getItem("UserId");
        var visted = this._UserService.getById(this.UID).subscribe(function (u) {
            _this.UserVisit = u[0].userVisitedPlace;
            _this.isVisited = _this.UserVisit.indexOf(id) > -1;
            console.log(_this.isVisited);
        });
    };
    PlaceDetails.prototype.checkifLovedPlace = function (id) {
        var _this = this;
        //   var UID = localStorage.getItem("UserId");
        var visted = this._UserService.getById(this.UID).subscribe(function (u) {
            _this.UserLoved = u[0].userFavPlace;
            _this.isLoved = _this.UserLoved.indexOf(id) > -1;
            console.log(_this.isLoved);
            console.log("loved");
        });
    };
    PlaceDetails.prototype.removeUsrV = function () {
        var _this = this;
        var UID = localStorage.getItem("UserId");
        var visted = this._UserService.getById(UID).subscribe(function (u) {
            _this.UserVisit = u[0].userVisitedPlace;
            var index = _this.UserVisit.indexOf(_this.placeID);
            console.log(_this.UserVisit);
            if (index > -1) {
                _this.UserVisit.splice(index, 1);
            }
            ;
            u[0].userVisitedPlace = _this.UserVisit;
            _this._UserService.updateUser(u[0]);
            console.log(u[0].userVisitedPlace);
            console.log(_this.UserVisit);
        });
    };
    PlaceDetails.prototype.removeUserFav = function () {
        var _this = this;
        var UID = localStorage.getItem("UserId");
        var visted = this._UserService.getById(UID).subscribe(function (u) {
            _this.UserLoved = u[0].userFavPlace;
            var index = _this.UserLoved.indexOf(_this.placeID);
            console.log(_this.UserLoved);
            if (index > -1) {
                _this.UserLoved.splice(index, 1);
            }
            ;
            u[0].userFavPlace = _this.UserLoved;
            _this._UserService.updateUser(u[0]);
            console.log(u[0].userFavPlace);
        });
    };
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
    PlaceDetails.prototype.addReview = function () {
        var Rev = {
            content: this.comment,
            DateTime: new Date(),
            isDelete: false,
            rate: this.rate,
            UserID: localStorage.getItem("UserId")
        };
        this.place.reviews.push(Rev);
        this._PlaceService.updatePlace(this.place).subscribe(function (data) { return JSON.stringify(data); });
        console.log(this.place.reviews);
    };
    PlaceDetails.prototype.update = function (value) {
        this.rate = value;
        console.log(this.rate);
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
            "../../assets/css/jquery-ui.css",
            "../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
            "../../assets/css/place_style.css",
            "../../assets/css/animate.min.css", "../../assets/css/placeCSS.css",
            "../../assets/css/checkboxStyle.css",
            "../../assets/css/rangeStyle.css",
            "../../assets/css/StartStyle.css",
            "../../assets/css/popUpStyle.css",],
        providers: [place_Service_1.PlaceService, trip_Service_1.TripService, user_Service_1.UserService]
    }),
    __metadata("design:paramtypes", [place_Service_1.PlaceService, router_1.ActivatedRoute, router_1.Router,
        trip_Service_1.TripService, user_Service_1.UserService])
], PlaceDetails);
exports.PlaceDetails = PlaceDetails;
//# sourceMappingURL=placeDetails.component.js.map