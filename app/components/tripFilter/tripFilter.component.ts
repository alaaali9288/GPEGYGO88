import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, Validator } from '@angular/forms'
import { Http, Response, Request, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TripTypeService } from "../../service/tripType.Service";
import { TripService } from "../../service/trip.Service";


@Component({
    moduleId: module.id,
    selector: 'tripFilter',
    templateUrl: './tripFilter.html',
    styleUrls: ['./bootstrap.min.css','./tripFilter.css',],
    providers: [TripTypeService, TripService]
})

export class Tripfilter {


    keyword: string = '';
    placesTypes: any;
    filteredTags: any[];
    private placesApi: any;
    private placeTypeApi: any;
    places: any;
    priceFilter: number = 1000;
    rankFilter: number = 0;
    filtersId: string[] = [];

    constructor(private route: ActivatedRoute, private _TripTypeService: TripTypeService, private _TripService: TripService) { }

    ngOnInit() {
        
        this.placeTypeApi = this._TripTypeService.getTripType();
        this.placeTypeApi.subscribe((x: any) => this.placesTypes = x);

        this.placesApi = this._TripService.getAllTripsLeader()
        this.placesApi.subscribe((places: any) => {this.places = places;}
        
        );
        
    }

    chooseTag(event: any) {
        if (this.keyword === "" && event.target.checked) {
            var tagId = event.target.attributes["value"].value;

            this.places = this.places.filter((item: any) => item.holidayType.findIndex((tag: any) => tag._id === tagId) !== -1
                && item.price <= this.priceFilter);
            this.filtersId.push(event.target.attributes["value"].value);
        }
        else if (this.keyword !== "" && event.target.checked) {
            var tagId = event.target.attributes["value"].value;

            this.places = this.places.filter((item: any) => item.holidayType.findIndex((tag: any) => tag._id === tagId) !== -1
                && item.price <= this.priceFilter
                && (item.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    item.holidayType.filter((tag: any) => tag.type.toLowerCase().includes(this.keyword.toLowerCase())).length >= 1 ));
            debugger;
            this.filtersId.push(event.target.attributes["value"].value);
        }
        else {
            var index = this.filtersId.indexOf(event.target.attributes["value"].value);
            this.filtersId.splice(index, 1);
            if (this.keyword === "" && this.filtersId.length >= 1) {
                this.placesApi.subscribe((x: any) => {
                    this.places = x;
                    this.places = this.places.filter((item: any) =>
                        item.holidayType.filter((tag: any) => this.filtersId.indexOf(tag._id) !== -1).length >= 1
                        && item.price <= this.priceFilter);
                });
            }
            else if (this.keyword !== "" && this.filtersId.length >= 1) {
                this.placesApi.subscribe((x: any) => {
                    this.places = x;
                    this.places = this.places.filter((item: any) =>
                        item.holidayType.filter((tag: any) => this.filtersId.indexOf(tag._id) !== -1).length >= 1
                        && item.price <= this.priceFilter
                        && (item.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                            item.holidayType.filter((tag: any) => tag.type.toLowerCase().includes(this.keyword.toLowerCase())).length >= 1));
                });
            }
            else if (this.keyword !== "" && this.filtersId.length === 0) {
                this.placesApi.subscribe((x: any) => {
                    this.places = x;
                    this.places = this.places.filter((item: any) =>
                        item.holidayType.filter((tag: any) => item.price <= this.priceFilter
                            && (item.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                                item.holidayType.filter((tag: any) => tag.type.toLowerCase().includes(this.keyword.toLowerCase())).length >= 1)));
                });
            }
            else {
                this.placesApi.subscribe((x: any) => {
                    this.places = x;
                    this.places = this.places.filter((item: any) => item.price <= this.priceFilter);
                    // this.sendRecipes.emit(this.recipes);
                });
            }
        }
    }

    choosePrice() {
        this.applyFilters();
        this.filterTags();
    }

    private applyFilters() {
        if (this.keyword === "" && this.filtersId.length === 0) {
            this.placesApi.subscribe((x: any) => {
                this.places = x;
                this.places = this.places.filter((item: any) => item.price <= this.priceFilter
                );
                debugger;
                this.filterTags();
            });
        }
        else if (this.keyword === "" && this.filtersId.length > 0) {
            this.placesApi.subscribe((x: any) => {
                this.places = x;
                this.places = this.places.filter((item: any) =>
                    item.holidayType.filter((tag: any) => this.filtersId.indexOf(tag._id) !== -1).length >= 1
                    && item.price <= this.priceFilter);
                this.filterTags();
            });
        }
        else if (this.keyword !== "" && this.filtersId.length === 0) {
            this.placesApi.subscribe((x: any) => {
                this.places = x;
                this.places = this.places.filter((item: any) => item.price <= this.priceFilter
                    && (item.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                        item.holidayType.filter((tag: any) => tag.type.toLowerCase().includes(this.keyword.toLowerCase())).length >= 1));
                this.filterTags();
            });
        }
        else {
            this.placesApi.subscribe((x: any) => {
                this.places = x;
                this.places = this.places.filter((item: any) =>
                    item.holidayType.filter((tag: any) => this.filtersId.indexOf(tag._id) !== -1).length >= 1
                    && item.price <= this.priceFilter
                    && (item.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                        item.holidayType.filter((tag: any) => tag.type.toLowerCase().includes(this.keyword.toLowerCase())).length >= 1));
                this.filterTags();
            });
        }
        // this.sendRecipes.emit(this.recipes);
    }

    private filterTags() {
        var placesTags: any[];
        if (this.keyword !== "") {
            for (var i = 0; i < this.places.length; i++) {
                for (var m = 0; m < this.places[i].holidayType.length; m++) {
                    var index = placesTags.findIndex(tag => tag === this.places[i].holidayType[m]._id);
                    if (index === -1)
                        placesTags.push(this.places[i].holidayType[m]._id);
                } // end for tags
            } // end for recipes
            this.placesTypes = placesTags;

            for (var i = 0; i < this.filtersId.length; i++) {
                var tagPlace = this.placesTypes.findIndex((tag: any) => tag._id === this.filtersId[i]);
                if (tagPlace === -1)
                    this.filtersId.splice(i, 1);
            }
        } // end if condition 
        else {
            this.placeTypeApi.subscribe((x: any) => this.placesTypes = x);
        }
    }

}