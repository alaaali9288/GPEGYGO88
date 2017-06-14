import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'


import { AppComponent }  from './app.component';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {SearchComponent} from './components/search.component';
import {ProfileComponent} from './components/profile.component';
import {addPlace} from './components/addPlace.component';
import {updatePlace} from './components/updatePlace.component';
import {updateTrip} from './components/updateTrip.component';

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
//import {TripsComponent} from './components/trips/trips.component';
import {MainComponent} from './components/main/main.component';
import {OffersComponent} from './components/offers/offers.component';
import {HolidayComponent} from './components/holiday/holiday.component';
import {AdventuresComponent} from './components/adventures/adventures.component';
import {ContactUSComponent} from './components/contactus.component';
import {AboutComponent} from './components/aboutComponent/about.component';
import {otherUserProfileComponent} from './components/otherUserProfile.component';
import {review} from './components/review.component';
import{HttpModule} from '@angular/http';
//import {FilterComponent} from './components/filter/filter.component';
//import {PlaceContentComponent} from './components/placeContent/placeContent.component';
//import {PlaceViewComponent} from './components/placeView/placeView.component';
//import{PlaceContainerComponent} from './components/placeFilterContainer/placeFilter.component';
//import {UserService} from './service/User.service';
import {filter} from './components/filter/filter.component';
import {TripTypeService} from "./service/tripType.service";
import {Tripfilter} from './components/tripFilter/tripFilter.component';


import {RouterModule} from '@angular/router'
import{routers} from './app.routing';

//pipes
import{TripTypePipe} from "./Pipes/tripType.pipe";

import * as $ from 'jquery';

//local storge
//import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  imports: [ BrowserModule,routers,HttpModule,FormsModule],
  declarations: [ AppComponent,HeaderComponent,FooterComponent, SearchComponent,ProfileComponent,addPlace,AboutComponent
  ,addTrip,PlaceSlider,PlaceDetails,PlaceRelated,PlacePage,TripContent,Photograp,RegistrationComponent,PlacesComponent,PlaceComponent,
  TripComponent,MainComponent,OffersComponent ,HolidayComponent , AdventuresComponent,ContactUSComponent,otherUserProfileComponent
  ,TripTypePipe,updatePlace,updateTrip,review,filter,Tripfilter],
 
  bootstrap: [ AppComponent ],
  providers:[TripTypeService]
})
export class AppModule { }
