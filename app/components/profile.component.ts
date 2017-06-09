import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from "../service/User.service";
import { TripService } from "../service/trip.service";
import { PlaceService } from "../service/place.service";
//rotut
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'EGYGO-Profile',
    // template:'<h1>HEWDER</h1>'
    templateUrl: 'html/profileComponent.html',
    styleUrls: [
        'css/circle.css',
        'css/profileStyle.css'
    ],
    providers: [UserService, TripService, PlaceService]

})

export class ProfileComponent implements OnInit, OnDestroy {
    user: any;
    TripsofUserIDs: any[];
    userPlacesToVisitIDs: any[];
    userVisitedPlaceIDs:any[];
    userFavPlaceIDs:any[];
    private sub: Subscription;

    TripsofUser: any[];
    userPlacesToVisit: any[];
    userVisitedPlace:any[];
    userFavPlace:any[];
    constructor(private _route: ActivatedRoute, private _router: Router, private _UserService: UserService
        , private _TripService: TripService, private _PlaceService: PlaceService) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getByID(id);
            });
    }

    getByID(Uid: string) {
        this._UserService.getById(Uid).subscribe((user) => {
        this.user = user[0]; this.TripsofUserIDs = user[0].userCreatedTrips;
            this.userPlacesToVisitIDs = user[0].userPlacesToVisit;
            this.userVisitedPlaceIDs=user[0].userVisitedPlace;
            this.userFavPlaceIDs = user[0].userFavPlace;
            console.log(this.userPlacesToVisitIDs);

            this.getTripById(this.TripsofUserIDs);
            this.uPlacesToVisit(this.userPlacesToVisitIDs);
            this.uVisitedPlace(this.userVisitedPlaceIDs);
            this.uFavPlace(this.userFavPlaceIDs);
            

        });
    }

//Get userFavPlace

uFavPlace(UFavPlaceIds:any[]){
this.userFavPlace = new Array();
for (let placeId of  UFavPlaceIds){
    this._PlaceService.getplaceById(placeId).subscribe((place)=>{
        this.userFavPlace.push(place[0]);
    })
}
}

// Get userVisitedPlace 

uVisitedPlace(UVisitedPlaceIds : any[]){
this.userVisitedPlace = new Array();
for (let placeId of UVisitedPlaceIds){
    this._PlaceService.getplaceById(placeId).subscribe((place)=>{
        this.userVisitedPlace.push(place[0]);
    })
}
}
    // Get userPlacesToVisit

    uPlacesToVisit(UPlaceToVisitIds: any[]) {
        this.userPlacesToVisit = new Array();
        for (let placeId of UPlaceToVisitIds) {
            this._PlaceService.getplaceById(placeId).subscribe((place) => {
                this.userPlacesToVisit.push(place[0]);
            })
        }
    }


    // get Trip from trip ID
    getTripById(tripsId: any[]) {
        this.TripsofUser = new Array();
        for (let tripId of tripsId) {
            this._TripService.getTripById(tripId).subscribe((trip) => {

                this.TripsofUser.push(trip[0]);

            })

        }
        //this.TripsofUserIDsIDs.forEach(trip => {
        //  this._TripService.getTripById(trip).subscribe((tripx)=> {this.trip = tripx[0]; console.log(this.trip);})
    }



    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    Path: string = './app/components/';
}