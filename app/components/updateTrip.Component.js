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
var tripType_service_1 = require("../service/tripType.service");
var place_service_1 = require("../service/place.service");
var router_1 = require("@angular/router");
var updateTrip = (function () {
    function updateTrip(_placeService, _tripTypeService, _router, _placeServices, _route) {
        this._placeService = _placeService;
        this._tripTypeService = _tripTypeService;
        this._router = _router;
        this._placeServices = _placeServices;
        this._route = _route;
        this.tags = [];
        this.activities = [];
        this.activ = [];
        this.holidayType = [];
        this.selectedPlaces = [];
    } //private fb: FormBuilder
    updateTrip.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getById(id);
        });
        this._tripTypeService.getTripType().subscribe(function (triptypes) { return _this.TripTypes = triptypes; });
        this._placeServices.getAllPlaces().subscribe(function (triptypes) { return _this.tripPlaces = triptypes; });
    };
    updateTrip.prototype.getById = function (id) {
        var _this = this;
        this._placeService.getTripById(id).subscribe(function (trip) {
            _this.trp = trip[0];
            console.log(trip);
            _this.title = trip[0].title;
            _this.price = trip[0].price;
            _this.description = trip[0].description;
            _this.id = trip[0]._id;
            _this.busLeave = trip[0].busLeave;
            _this.busBack = trip[0].busLeave,
                _this.dateFrom = trip[0].dateFrom,
                _this.dateTo = trip[0].dateTo,
                _this.busLeaveLoc = trip[0].locFrom,
                _this.busBackLoc = trip[0].locTo,
                console.log(_this.trp);
        });
    };
    updateTrip.prototype.selectIngredientActiv = function (select) {
        //  var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendActiv");
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(this.activity); // selected text
        input.type = 'hidden';
        input.name = 'activities[]';
        //   input.value = select.target.options[option].value;
        a.setAttribute('onclick', 'this.parentNode.remove(this);'); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        this.activities.push(this.activity);
    };
    //select multiple
    updateTrip.prototype.selectIngredientTag = function (select) {
        //  var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendTag");
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(this.tagtxt); // selected text
        input.type = 'hidden';
        input.name = 'activities[]';
        //   input.value = select.target.options[option].value;
        a.setAttribute('onclick', 'this.parentNode.remove(this);'); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        this.tags.push(this.tagtxt);
    };
    //select multiple
    updateTrip.prototype.selectIngredientPlace = function (select) {
        var _this = this;
        var option = select.target.options.selectedIndex; //selected index
        var ul = document.getElementById("ulAppendPlace");
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
        //  this.selectedPlaces.push(input.value);
        this.typeName = input.value;
        this._placeServices.getPlaceId(this.typeName)
            .subscribe(function (triptypeId) {
            for (var t = 0; t < triptypeId.length; t++) {
                _this.PlaceId = triptypeId[t]._id;
                _this.selectedPlaces.push(_this.PlaceId);
            }
            console.log(_this.selectedPlaces);
        });
    };
    //select multiple
    updateTrip.prototype.selectIngredientPlaces = function (select) {
        var _this = this;
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
        this.typeName = input.value;
        this._tripTypeService.getTripTypeId(this.typeName)
            .subscribe(function (triptypeId) {
            for (var t = 0; t < triptypeId.length; t++) {
                _this.TripTypeId = triptypeId[t]._id;
                _this.holidayType.push(_this.TripTypeId);
            }
        });
    };
    // addPlaceForm: FormGroup ;
    updateTrip.prototype.updateTrip = function () {
        var _this = this;
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
            activities: this.activities,
            isDeleted: false,
            lastEdit: new Date(),
            locFrom: this.busLeaveLoc,
            locTo: this.busBackLoc,
            holidayType: this.holidayType,
            places: this.selectedPlaces
        };
        this._placeService.createTrip(trip)
            .subscribe(function (data) { return JSON.stringify(data); }, function () { return _this._router.navigate(["/tripContent/" + _this.id]); });
    };
    return updateTrip;
}());
updateTrip = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'eg-addTrip',
        templateUrl: './html/updateTrip.component.html',
        styleUrls: ['./css/addPlace.component.css',
            './css/style.css',
            './css/bootstrap.min.css',
            './font-awesome-4.7.0/css/font-awesome.min.css'
            //  './css/select2.min.css',
            //  './css/dropzone.css',
            //  './css/fwslider.css'
        ],
        providers: [trip_service_1.TripService, tripType_service_1.TripTypeService, place_service_1.PlaceService]
    }),
    __metadata("design:paramtypes", [trip_service_1.TripService, tripType_service_1.TripTypeService, router_1.Router, place_service_1.PlaceService, router_1.ActivatedRoute])
], updateTrip);
exports.updateTrip = updateTrip;
//# sourceMappingURL=updateTrip.component.js.map