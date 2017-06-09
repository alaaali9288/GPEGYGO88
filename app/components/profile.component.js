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
var User_service_1 = require("../service/User.service");
var trip_service_1 = require("../service/trip.service");
var place_service_1 = require("../service/place.service");
//rotut
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(_route, _router, _UserService, _TripService, _PlaceService) {
        this._route = _route;
        this._router = _router;
        this._UserService = _UserService;
        this._TripService = _TripService;
        this._PlaceService = _PlaceService;
        this.Path = './app/components/';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getByID(id);
        });
    };
    ProfileComponent.prototype.getByID = function (Uid) {
        var _this = this;
        this._UserService.getById(Uid).subscribe(function (user) {
            _this.user = user[0];
            _this.TripsofUserIDs = user[0].userCreatedTrips;
            _this.userPlacesToVisitIDs = user[0].userPlacesToVisit;
            _this.userVisitedPlaceIDs = user[0].userVisitedPlace;
            _this.userFavPlaceIDs = user[0].userFavPlace;
            console.log(_this.userPlacesToVisitIDs);
            _this.getTripById(_this.TripsofUserIDs);
            _this.uPlacesToVisit(_this.userPlacesToVisitIDs);
            _this.uVisitedPlace(_this.userVisitedPlaceIDs);
            _this.uFavPlace(_this.userFavPlaceIDs);
        });
    };
    //Get userFavPlace
    ProfileComponent.prototype.uFavPlace = function (UFavPlaceIds) {
        var _this = this;
        this.userFavPlace = new Array();
        for (var _i = 0, UFavPlaceIds_1 = UFavPlaceIds; _i < UFavPlaceIds_1.length; _i++) {
            var placeId = UFavPlaceIds_1[_i];
            this._PlaceService.getplaceById(placeId).subscribe(function (place) {
                _this.userFavPlace.push(place[0]);
            });
        }
    };
    // Get userVisitedPlace 
    ProfileComponent.prototype.uVisitedPlace = function (UVisitedPlaceIds) {
        var _this = this;
        this.userVisitedPlace = new Array();
        for (var _i = 0, UVisitedPlaceIds_1 = UVisitedPlaceIds; _i < UVisitedPlaceIds_1.length; _i++) {
            var placeId = UVisitedPlaceIds_1[_i];
            this._PlaceService.getplaceById(placeId).subscribe(function (place) {
                _this.userVisitedPlace.push(place[0]);
            });
        }
    };
    // Get userPlacesToVisit
    ProfileComponent.prototype.uPlacesToVisit = function (UPlaceToVisitIds) {
        var _this = this;
        this.userPlacesToVisit = new Array();
        for (var _i = 0, UPlaceToVisitIds_1 = UPlaceToVisitIds; _i < UPlaceToVisitIds_1.length; _i++) {
            var placeId = UPlaceToVisitIds_1[_i];
            this._PlaceService.getplaceById(placeId).subscribe(function (place) {
                _this.userPlacesToVisit.push(place[0]);
            });
        }
    };
    // get Trip from trip ID
    ProfileComponent.prototype.getTripById = function (tripsId) {
        var _this = this;
        this.TripsofUser = new Array();
        for (var _i = 0, tripsId_1 = tripsId; _i < tripsId_1.length; _i++) {
            var tripId = tripsId_1[_i];
            this._TripService.getTripById(tripId).subscribe(function (trip) {
                _this.TripsofUser.push(trip[0]);
            });
        }
        //this.TripsofUserIDsIDs.forEach(trip => {
        //  this._TripService.getTripById(trip).subscribe((tripx)=> {this.trip = tripx[0]; console.log(this.trip);})
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'EGYGO-Profile',
        // template:'<h1>HEWDER</h1>'
        templateUrl: 'html/profileComponent.html',
        styleUrls: [
            'css/circle.css',
            'css/profileStyle.css'
        ],
        providers: [User_service_1.UserService, trip_service_1.TripService, place_service_1.PlaceService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, User_service_1.UserService,
        trip_service_1.TripService, place_service_1.PlaceService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map