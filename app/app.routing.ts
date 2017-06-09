import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {SearchComponent} from './components/search.component';
import {ProfileComponent} from './components/profile.component';
import {addPlace} from './components/addPlace.component';
import {addTrip} from './components/addTrip.component';
import {PlaceSlider} from "./components/placeSliderComponent/placeSlider.component";
import {PlaceDetails} from "./components/placeDetailsComponent/placeDetails.component";
import {PlaceRelated} from "./components/placeRelatedComponent/placeRelated.component";
import {PlacePage} from "./components/placePageComponent/placePage.component";
import {TripContent} from "./components/tripComponent/trip.component";
import {Photograp} from "./components/photographImgsComponent/photographyImgs.component";
import {RegistrationComponent} from './components/registration.component';

import {PlacesComponent} from './components/places/places.component';
import {PlaceComponent} from './components/place/place.component';
import {TripComponent} from './components/trip/trip.component';
import {TripsComponent} from './components/trips/trips.component';
import {MainComponent} from './components/main/main.component';
import {OffersComponent} from './components/offers/offers.component';
import {HolidayComponent} from './components/holiday/holiday.component';
import {AdventuresComponent} from './components/adventures/adventures.component';
import {ContactUSComponent} from './components/contactus.component';
import {AboutComponent} from './components/aboutComponent/about.component';


const app_routes:Routes=[
    {
        path:'',
        component:MainComponent
    },
    {
        path:'loginAndReg',
        component:RegistrationComponent
    },
       {
        path:'aboutus',
        component:AboutComponent
    },
      {
        path:'contactUS',
        component:ContactUSComponent
    },
      {
        path:'places',
        component:PlacesComponent
    },
        {
        path:'trips',
        component:TripsComponent
    },
    
    {
path:'search',
component:SearchComponent

    },
    {
        path:'profile/:id',//albums/:id
        component:ProfileComponent
    },
     {
        path:'addPlace',
        component:addPlace
    },
     {
        path:'addTrip',
        component:addTrip
    },
     {
        path:'placeDetails',
        component:PlaceDetails
    },
     {
        path:'tripContent',//tripContent/:id
        component:TripContent
    },
      
];
export const routers:ModuleWithProviders=RouterModule.forRoot(app_routes);