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
var router_1 = require("@angular/router");
var tripType_Service_1 = require("../../service/tripType.Service");
var place_Service_1 = require("../../service/place.Service");
var filter = (function () {
    function filter(route, _TripTypeService, _PlaceService) {
        this.route = route;
        this._TripTypeService = _TripTypeService;
        this._PlaceService = _PlaceService;
        this.keyword = '';
        this.priceFilter = 1000;
        this.rankFilter = 0;
        this.filtersId = [];
    }
    filter.prototype.ngOnInit = function () {
        var _this = this;
        this.placeTypeApi = this._TripTypeService.getTripType();
        this.placeTypeApi.subscribe(function (x) { return _this.placesTypes = x; });
        this.placesApi = this._PlaceService.getAllPlacesLeader();
        this.placesApi.subscribe(function (places) { return _this.places = places; });
    };
    filter.prototype.chooseTag = function (event) {
        var _this = this;
        if (this.keyword === "" && event.target.checked) {
            var tagId = event.target.attributes["value"].value;
            this.places = this.places.filter(function (item) {
                return item.holidayType.findIndex(function (tag) { return tag._id === tagId; }) !== -1
                    && item.price <= _this.priceFilter;
            });
            this.filtersId.push(event.target.attributes["value"].value);
        }
        else if (this.keyword !== "" && event.target.checked) {
            var tagId = event.target.attributes["value"].value;
            this.places = this.places.filter(function (item) { return item.holidayType.findIndex(function (tag) { return tag._id === tagId; }) !== -1
                && item.price <= _this.priceFilter
                && (item.placeName.toLowerCase().includes(_this.keyword.toLowerCase()) ||
                    item.holidayType.filter(function (tag) { return tag.type.toLowerCase().includes(_this.keyword.toLowerCase()); }).length >= 1); });
            debugger;
            this.filtersId.push(event.target.attributes["value"].value);
        }
        else {
            var index = this.filtersId.indexOf(event.target.attributes["value"].value);
            this.filtersId.splice(index, 1);
            if (this.keyword === "" && this.filtersId.length >= 1) {
                this.placesApi.subscribe(function (x) {
                    _this.places = x;
                    _this.places = _this.places.filter(function (item) {
                        return item.holidayType.filter(function (tag) { return _this.filtersId.indexOf(tag._id) !== -1; }).length >= 1
                            && item.price <= _this.priceFilter;
                    });
                });
            }
            else if (this.keyword !== "" && this.filtersId.length >= 1) {
                this.placesApi.subscribe(function (x) {
                    _this.places = x;
                    _this.places = _this.places.filter(function (item) {
                        return item.holidayType.filter(function (tag) { return _this.filtersId.indexOf(tag._id) !== -1; }).length >= 1
                            && item.price <= _this.priceFilter
                            && (item.placeName.toLowerCase().includes(_this.keyword.toLowerCase()) ||
                                item.holidayType.filter(function (tag) { return tag.type.toLowerCase().includes(_this.keyword.toLowerCase()); }).length >= 1);
                    });
                });
            }
            else if (this.keyword !== "" && this.filtersId.length === 0) {
                this.placesApi.subscribe(function (x) {
                    _this.places = x;
                    _this.places = _this.places.filter(function (item) {
                        return item.holidayType.filter(function (tag) { return item.price <= _this.priceFilter
                            && (item.placeName.toLowerCase().includes(_this.keyword.toLowerCase()) ||
                                item.holidayType.filter(function (tag) { return tag.type.toLowerCase().includes(_this.keyword.toLowerCase()); }).length >= 1); });
                    });
                });
            }
            else {
                this.placesApi.subscribe(function (x) {
                    _this.places = x;
                    _this.places = _this.places.filter(function (item) { return item.price <= _this.priceFilter; });
                    // this.sendRecipes.emit(this.recipes);
                });
            }
        }
    };
    filter.prototype.choosePrice = function () {
        this.applyFilters();
        this.filterTags();
    };
    filter.prototype.applyFilters = function () {
        var _this = this;
        if (this.keyword === "" && this.filtersId.length === 0) {
            this.placesApi.subscribe(function (x) {
                _this.places = x;
                _this.places = _this.places.filter(function (item) { return item.price <= _this.priceFilter; });
                debugger;
                _this.filterTags();
            });
        }
        else if (this.keyword === "" && this.filtersId.length > 0) {
            this.placesApi.subscribe(function (x) {
                _this.places = x;
                _this.places = _this.places.filter(function (item) {
                    return item.holidayType.filter(function (tag) { return _this.filtersId.indexOf(tag._id) !== -1; }).length >= 1
                        && item.price <= _this.priceFilter;
                });
                _this.filterTags();
            });
        }
        else if (this.keyword !== "" && this.filtersId.length === 0) {
            this.placesApi.subscribe(function (x) {
                _this.places = x;
                _this.places = _this.places.filter(function (item) { return item.price <= _this.priceFilter
                    && (item.placeName.toLowerCase().includes(_this.keyword.toLowerCase()) ||
                        item.holidayType.filter(function (tag) { return tag.type.toLowerCase().includes(_this.keyword.toLowerCase()); }).length >= 1); });
                _this.filterTags();
            });
        }
        else {
            this.placesApi.subscribe(function (x) {
                _this.places = x;
                _this.places = _this.places.filter(function (item) {
                    return item.holidayType.filter(function (tag) { return _this.filtersId.indexOf(tag._id) !== -1; }).length >= 1
                        && item.price <= _this.priceFilter
                        && (item.placeName.toLowerCase().includes(_this.keyword.toLowerCase()) ||
                            item.holidayType.filter(function (tag) { return tag.type.toLowerCase().includes(_this.keyword.toLowerCase()); }).length >= 1);
                });
                _this.filterTags();
            });
        }
        // this.sendRecipes.emit(this.recipes);
    };
    filter.prototype.filterTags = function () {
        var _this = this;
        var placesTags;
        if (this.keyword !== "") {
            for (var i = 0; i < this.places.length; i++) {
                for (var m = 0; m < this.places[i].holidayType.length; m++) {
                    var index = placesTags.findIndex(function (tag) { return tag === _this.places[i].holidayType[m]._id; });
                    if (index === -1)
                        placesTags.push(this.places[i].holidayType[m]._id);
                } // end for tags
            } // end for recipes
            this.placesTypes = placesTags;
            for (var i = 0; i < this.filtersId.length; i++) {
                var tagPlace = this.placesTypes.findIndex(function (tag) { return tag._id === _this.filtersId[i]; });
                if (tagPlace === -1)
                    this.filtersId.splice(i, 1);
            }
        } // end if condition 
        else {
            this.placeTypeApi.subscribe(function (x) { return _this.placesTypes = x; });
        }
    };
    return filter;
}());
filter = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'filter',
        templateUrl: './filter.html',
        styleUrls: ['./bootstrap.min.css', './filter.css',],
        providers: [tripType_Service_1.TripTypeService, place_Service_1.PlaceService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, tripType_Service_1.TripTypeService, place_Service_1.PlaceService])
], filter);
exports.filter = filter;
//# sourceMappingURL=filter.component.js.map