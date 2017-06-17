"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var search_component_1 = require("./components/search.component");
var profile_component_1 = require("./components/profile.component");
var addPlace_component_1 = require("./components/addPlace.component");
var addTrip_component_1 = require("./components/addTrip.component");
var updateTrip_component_1 = require("./components/updateTrip.component");
var updatePlace_component_1 = require("./components/updatePlace.component");
var placeDetails_component_1 = require("./components/placeDetailsComponent/placeDetails.component");
var trip_component_1 = require("./components/tripComponent/trip.component");
var registration_component_1 = require("./components/registration.component");
var place_component_1 = require("./components/place/place.component");
var trip_component_2 = require("./components/trip/trip.component");
var contactus_component_1 = require("./components/contactus.component");
var about_component_1 = require("./components/aboutComponent/about.component");
var review_component_1 = require("./components/review.component");
var filter_component_1 = require("./components/filter/filter.component");
var tripFilter_component_1 = require("./components/tripFilter/tripFilter.component");
var welcome_component_1 = require("./components/home/welcome.component");
//import {PlaceContentComponent} from './components/placeContent/placeContent.component';
//import {PlaceViewComponent} from './components/placeView/placeView.component';
//import{PlaceContainerComponent} from './components/placeFilterContainer/placeFilter.component';
var app_routes = [
    {
        path: '',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'loginAndReg',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'aboutus',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contactUS',
        component: contactus_component_1.ContactUSComponent
    },
    {
        path: 'places',
        component: place_component_1.PlaceComponent //PlacesComponent
    },
    {
        path: 'trips',
        component: trip_component_2.TripComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'profile/:id',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'addPlace',
        component: addPlace_component_1.addPlace
    },
    {
        path: 'addTrip',
        component: addTrip_component_1.addTrip
    },
    {
        path: 'placeDetails/:id',
        component: placeDetails_component_1.PlaceDetails
    },
    {
        path: 'tripContent/:id',
        component: trip_component_1.TripContent
    },
    {
        path: 'updateTrip/:id',
        component: updateTrip_component_1.updateTrip
    },
    {
        path: 'updatePlace/:id',
        component: updatePlace_component_1.updatePlace
    },
    {
        path: 'placeDetails/:id/review/:Pid',
        component: review_component_1.review
    },
    {
        path: 'filter',
        component: filter_component_1.filter
    },
    {
        path: 'Tripfilter',
        component: tripFilter_component_1.Tripfilter
    },
];
exports.routers = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map