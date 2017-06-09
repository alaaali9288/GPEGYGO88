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
var places_component_1 = require("./components/places/places.component");
var trips_component_1 = require("./components/trips/trips.component");
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
        component: places_component_1.PlacesComponent
    },
    {
        path: 'trips',
        component: trips_component_1.TripsComponent
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
        path: 'placeDetails',
        component: placeDetails_component_1.PlaceDetails
    },
    {
        path: 'tripContent',
        component: trip_component_1.TripContent
    },
];
exports.routers = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map