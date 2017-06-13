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
var trip_service_1 = require("../service/trip.service");
var addTrip = (function () {
    function addTrip(_placeService) {
        this._placeService = _placeService;
        this.tags = [];
        this.activ = [];
    } //private fb: FormBuilder
    addTrip.prototype.ngOnInit = function () {
    };
    //select multiple
    addTrip.prototype.selectIngredient = function (select) {
        var option = select.target.options.selectedIndex; //selected index
        var ul = document.getElementById("ulAppend");
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(select.target.options[option].value); // selected text
        input.type = 'hidden';
        input.name = 'activities[]';
        input.value = select.target.options[option].value;
        a.setAttribute('onclick', 'this.parentNode.remove(this);'); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        this.tags.push(input.value);
        console.log(this.tags);
    };
    //select multiple
    addTrip.prototype.selectIngredientPlaces = function (select) {
        var option = select.target.options.selectedIndex; //selected index
        var ul = document.getElementById("ulAppendPlaces");
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(select.target.options[option].value); // selected text
        input.type = 'hidden';
        input.name = 'activities[]';
        input.value = select.target.options[option].value;
        a.setAttribute('onclick', 'this.parentNode.remove(this);'); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        this.activ.push(input.value);
        console.log(this.activ);
    };
    // addPlaceForm: FormGroup ;
    addTrip.prototype.addTrip = function () {
        var trip = {
            title: this.title,
            price: this.price,
            busLeave: this.busLeave,
            busBack: this.busBack,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            description: this.description,
            userID: localStorage.getItem("UserId"),
            tags: this.tags,
            activities: this.activ,
            isDeleted: false,
            lastEdit: new Date(),
        };
        this._placeService.createTrip(trip)
            .subscribe(function (data) { return JSON.stringify(data); }, function () { return console.log("finished"); });
    };
    return addTrip;
}());
addTrip = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'eg-addTrip',
        templateUrl: './html/addTrip.component.html',
        styleUrls: ['./css/addPlace.component.css',
            './css/style.css',
            './css/bootstrap.min.css',
        ],
        providers: [trip_service_1.TripService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof trip_service_1.TripService !== "undefined" && trip_service_1.TripService) === "function" && _a || Object])
], addTrip);
exports.addTrip = addTrip;
var _a;
//# sourceMappingURL=addTrip.component.js.map