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
var UserService = (function () {
    // private _userUrl = 'localhost:5000/user/all'; 
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUserNor = function () {
        return this._http.get('http://localhost:5000/user/all').map(function (res) { return res.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this._http.get("http://localhost:5000/user/i/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserName = function (userName, password) {
        return this._http.get("http://localhost:5000/user/un/" + userName).map(function (res) { return res.json(); });
    };
    UserService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService.prototype.createUser = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var body = JSON.stringify(user);
        return this._http.post("http://localhost:5000/user", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getuserByName = function (uname) {
        return this._http.get("http://localhost:5000/user/un/" + uname).map(function (res) { return res.json(); });
    };
    UserService.prototype.getuserByNameAlaa = function (uname) {
        return this._http.get("http://localhost:5000/user/un/" + uname);
    };
    // updateVisitedPlaces(Uid: string) {
    //    // this.getById(Uid).subscribe(user => {
    //      //   this.userVP = user[0];
    //       //  this.userVP.userVisitedPlace.push("593ab7839770e412c09158a5");
    //          var user ={
    //              _id:Uid,
    //             userVisitedPlace: ["593ab7839770e412c0915999"]
    //          };
    //          this.updateUser(user).subscribe(data=>JSON.stringify(data),()=>console.log("bbbb"));
    //         // console.log("EXO");
    //         // console.log(this.userVP.userVisitedPlace);
    //     }
    UserService.prototype.updateUser = function (User) {
        console.log("hajar");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        // let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(User);
        return this._http.post("http://localhost:5000/user/update", body, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { console.log("zaft => ", data); });
    };
    ////////////////////////////
    UserService.prototype.updateUserTrips = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        // let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(user);
        return this._http.post("http://localhost:5000/user/updatetrips", body, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { data; });
    };
    UserService.prototype.updateUserPlace = function (place) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        //    let options = new RequestOptions({ headers: headers });
        var body = JSON.stringify(place);
        return this._http.post("http://localhost:5000/user/updateplaces", body, { headers: headers })
            .map(function (res) { return res.json(); }).subscribe(function (data) { data; });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=User.service.js.map