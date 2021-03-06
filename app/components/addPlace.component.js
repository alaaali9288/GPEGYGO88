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
var place_service_1 = require("../service/place.service");
var tripType_service_1 = require("../service/tripType.service");
var router_1 = require("@angular/router");
var addPlace = (function () {
    function addPlace(_placeService, _tripTypeService, _router) {
        this._placeService = _placeService;
        this._tripTypeService = _tripTypeService;
        this._router = _router;
        this.holidayType = [];
        this.activ = [];
        this.nam = [];
        this.tags = [];
    }
    addPlace.prototype.ngOnInit = function () {
        var _this = this;
        this._tripTypeService.getTripType().subscribe(function (triptypes) { return _this.TripTypes = triptypes; });
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function (input) {
            var label = input.nextElementSibling, labelVal = label.innerHTML;
            input.addEventListener('change', function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();
                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });
            // Firefox bug fix
            input.addEventListener('focus', function () { input.classList.add('has-focus'); });
            input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
        });
    };
    //select multiple
    addPlace.prototype.selectIngredient = function (select) {
        var ul = document.getElementById("ulAppend");
        var li = document.createElement('li');
        var input = document.createElement('input');
        var activity = this.activity;
        var a = document.createElement('a'); //   <button class="close">&times;</button>
        var text1 = document.createTextNode(activity); // selected text
        input.type = 'hidden';
        input.name = 'activities[]';
        //  input.value = select.target.options[option].value;
        this.nam.push(activity);
        //btn.setAttribute('class', 'close');//
        a.setAttribute('onclick', 'this.parentNode.remove(this);console.log(this.previousSibling.value); '); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        //a.setAttribute('onClick', 'popinArray()');//                
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a); //
        li.appendChild(text1);
        //li.setAttribute('onclick', 'this.parentNode.removeChild(this);');
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        console.log(this.nam);
        console.log(li);
        //console.log(this.activ);
    };
    addPlace.prototype.getFiles = function (event) {
        this.files = event.target.files;
        console.log("d5l fl change");
    };
    //select multiple
    addPlace.prototype.selectIngredientPlaces = function (select) {
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
        this.typeName = input.value;
        this._tripTypeService.getTripTypeId(this.typeName)
            .subscribe(function (triptypeId) {
            for (var t = 0; t < triptypeId.length; t++) {
                _this.TripTypeId = triptypeId[t]._id;
                _this.holidayType.push(_this.TripTypeId);
            }
        });
        //   console.log(this.TripTypeId)
    };
    //select multiple
    addPlace.prototype.selectIngredientTags = function (select) {
        // var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendTags");
        var txt = this.tagTxt;
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(txt); // selected text
        console.log(txt);
        input.type = 'hidden';
        input.name = 'Tags[]';
        //input.value = select.target.options[option].value;
        a.setAttribute('onclick', 'this.parentNode.remove(this);'); //
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;'); //        
        a.innerHTML = '&times;'; //
        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');
        ul.appendChild(li);
        this.tags.push(txt);
        console.log(this.tags);
    };
    addPlace.prototype.addPlace = function () {
        //this.nam.push(input.value);
        var _this = this;
        this.activ = this.nam;
        // this.activ=;
        var place = {
            placeName: this.placeName,
            cityName: this.city,
            address: this.address,
            description: this.description,
            userID: localStorage.getItem("UserId"),
            tags: this.tags,
            activities: this.activ,
            isDeleted: false,
            lastEdit: new Date(),
            holidayType: this.holidayType,
        };
        console.log(this.files);
        this._placeService.createPlace(place)
            .subscribe(function (data) { return JSON.stringify(data); }, function () { return _this._router.navigate(["/places"]); });
    };
    return addPlace;
}());
addPlace = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'eg-addPlace',
        templateUrl: './html/addPlace.component.html',
        styleUrls: ['./css/addPlace.component.css',
            './css/style.css',
            './css/BoxStyle.css',
            './css/inputFileStyle.css',
            './css/bootstrap.min.css'
        ], providers: [place_service_1.PlaceService, tripType_service_1.TripTypeService]
    }),
    __metadata("design:paramtypes", [place_service_1.PlaceService, tripType_service_1.TripTypeService, router_1.Router])
], addPlace);
exports.addPlace = addPlace;
//# sourceMappingURL=addPlace.component.js.map