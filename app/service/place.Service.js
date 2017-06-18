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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var PlaceService = (function () {
    // private _userUrl = 'localhost:5000/user/all'; 
    function PlaceService(_http) {
        this._http = _http;
    }
    PlaceService.prototype.getplaceById = function (id) {
        return this._http.get("http://localhost:5000/place/i/" + id).map(function (res) { return res.json(); });
    };
    PlaceService.prototype.getAllPlaces = function () {
        return this._http.get("http://localhost:5000/place/all").map(function (res) { return res.json(); });
    };
    PlaceService.prototype.getAllPlacesLeader = function () {
        return this._http.get("http://localhost:5000/place/AllLeader").map(function (res) { return res.json(); });
    };
    PlaceService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PlaceService.prototype.createPlace = function (place) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        //    let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(place);
        return this._http.post("http://localhost:5000/place", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceService.prototype.updatePlace = function (place) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        //    let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(place);
        return this._http.post("http://localhost:5000/place/update", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceService.prototype.getPlaceId = function (name) {
        return this._http.get("http://localhost:5000/place/n/" + name)
            .map(function (res) { return res.json(); });
    };
    return PlaceService;
}());
PlaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map