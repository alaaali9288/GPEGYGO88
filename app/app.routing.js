"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var search_component_1 = require("./components/search.component");
var profile_component_1 = require("./components/profile.component");
var addPlace_component_1 = require("./components/addPlace.component");
var addTrip_component_1 = require("./components/addTrip.component");
var placeDetails_component_1 = require("./components/placeDetailsComponent/placeDetails.component");
var trip_component_1 = require("./components/tripComponent/trip.component");
var registration_component_1 = require("./components/registration.component");
var place_component_1 = require("./components/place/place.component");
var trip_component_2 = require("./components/trip/trip.component");
//import {TripsComponent} from './components/trips/trips.component';
var main_component_1 = require("./components/main/main.component");
var contactus_component_1 = require("./components/contactus.component");
var about_component_1 = require("./components/aboutComponent/about.component");
var app_routes = [
    {
        path: '',
        component: main_component_1.MainComponent
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
];
exports.routers = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map