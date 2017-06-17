import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {SearchComponent} from './components/search.component';
import {ProfileComponent} from './components/profile.component';
import {addPlace} from './components/addPlace.component';
import {addTrip} from './components/addTrip.component';
import {updateTrip} from './components/updateTrip.component';
import {updatePlace} from './components/updatePlace.component';

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
//import {TripsComponent} from './components/trips/trips.component';
import {MainComponent} from './components/main/main.component';
import {OffersComponent} from './components/offers/offers.component';
import {HolidayComponent} from './components/holiday/holiday.component';
import {AdventuresComponent} from './components/adventures/adventures.component';
import {ContactUSComponent} from './components/contactus.component';
import {AboutComponent} from './components/aboutComponent/about.component';
import {review} from './components/review.component';
import {filter} from './components/filter/filter.component';
import {Tripfilter} from './components/tripFilter/tripFilter.component';
import {WelcomeComponent} from './components/home/welcome.component'

//import {PlaceContentComponent} from './components/placeContent/placeContent.component';
//import {PlaceViewComponent} from './components/placeView/placeView.component';
//import{PlaceContainerComponent} from './components/placeFilterContainer/placeFilter.component';


const app_routes:Routes=[
    {
        path:'',
        component:WelcomeComponent
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
        component:PlaceComponent //PlacesComponent
    },
        {
        path:'trips',
        component:TripComponent
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
        path:'placeDetails/:id',
        component:PlaceDetails
    },
     {
        path:'tripContent/:id',//tripContent/:id
        component:TripContent
    },
    {
        path:'updateTrip/:id',//tripContent/:id
        component:updateTrip
    },
    {
        path:'updatePlace/:id',//tripContent/:id
        component:updatePlace
    },
       {
        path:'placeDetails/:id/review/:Pid',//review/:id // Place Review
        component:review
    },

     {
        path:'filter',//review/:id // Place Review
        component:filter
    },
         {
        path:'Tripfilter',//review/:id // Place Review
        component:Tripfilter
    },
      
];
export const routers:ModuleWithProviders=RouterModule.forRoot(app_routes);