"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header.component");
var footer_component_1 = require("./components/footer.component");
var search_component_1 = require("./components/search.component");
var profile_component_1 = require("./components/profile.component");
var addPlace_component_1 = require("./components/addPlace.component");
var updatePlace_component_1 = require("./components/updatePlace.component");
var updateTrip_component_1 = require("./components/updateTrip.component");
var addTrip_component_1 = require("./components/addTrip.component");
var placeSlider_component_1 = require("./components/placeSliderComponent/placeSlider.component");
var placeDetails_component_1 = require("./components/placeDetailsComponent/placeDetails.component");
var placeRelated_component_1 = require("./components/placeRelatedComponent/placeRelated.component");
var placePage_component_1 = require("./components/placePageComponent/placePage.component");
var trip_component_1 = require("./components/tripComponent/trip.component");
var photographyImgs_component_1 = require("./components/photographImgsComponent/photographyImgs.component");
var registration_component_1 = require("./components/registration.component");
var places_component_1 = require("./components/places/places.component");
var place_component_1 = require("./components/place/place.component");
var trip_component_2 = require("./components/trip/trip.component");
//import {TripsComponent} from './components/trips/trips.component';
var main_component_1 = require("./components/main/main.component");
var offers_component_1 = require("./components/offers/offers.component");
var holiday_component_1 = require("./components/holiday/holiday.component");
var adventures_component_1 = require("./components/adventures/adventures.component");
var contactus_component_1 = require("./components/contactus.component");
var about_component_1 = require("./components/aboutComponent/about.component");
var otherUserProfile_component_1 = require("./components/otherUserProfile.component");
var review_component_1 = require("./components/review.component");
var http_1 = require("@angular/http");
//import {FilterComponent} from './components/filter/filter.component';
//import {PlaceContentComponent} from './components/placeContent/placeContent.component';
//import {PlaceViewComponent} from './components/placeView/placeView.component';
//import{PlaceContainerComponent} from './components/placeFilterContainer/placeFilter.component';
//import {UserService} from './service/User.service';
var filter_component_1 = require("./components/filter/filter.component");
var tripType_service_1 = require("./service/tripType.service");
var tripFilter_component_1 = require("./components/tripFilter/tripFilter.component");
var app_routing_1 = require("./app.routing");
//pipes
var tripType_pipe_1 = require("./Pipes/tripType.pipe");
//local storge
//import { LocalStorageModule } from 'angular-2-local-storage';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routers, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, search_component_1.SearchComponent, profile_component_1.ProfileComponent, addPlace_component_1.addPlace, about_component_1.AboutComponent,
            addTrip_component_1.addTrip, placeSlider_component_1.PlaceSlider, placeDetails_component_1.PlaceDetails, placeRelated_component_1.PlaceRelated, placePage_component_1.PlacePage, trip_component_1.TripContent, photographyImgs_component_1.Photograp, registration_component_1.RegistrationComponent, places_component_1.PlacesComponent, place_component_1.PlaceComponent,
            trip_component_2.TripComponent, main_component_1.MainComponent, offers_component_1.OffersComponent, holiday_component_1.HolidayComponent, adventures_component_1.AdventuresComponent, contactus_component_1.ContactUSComponent, otherUserProfile_component_1.otherUserProfileComponent,
            tripType_pipe_1.TripTypePipe, updatePlace_component_1.updatePlace, updateTrip_component_1.updateTrip, review_component_1.review, filter_component_1.filter, tripFilter_component_1.Tripfilter],
        bootstrap: [app_component_1.AppComponent],
        providers: [tripType_service_1.TripTypeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map