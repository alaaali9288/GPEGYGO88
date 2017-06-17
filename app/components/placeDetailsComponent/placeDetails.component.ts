import { Component } from "@angular/core";
import { PlaceService } from "../../service/place.Service";
import { TripService } from "../../service/trip.Service";
import { UserService } from "../../service/user.Service";
//rotut
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: "place-detail",
    templateUrl: "./placeDetails.component.html",
    styles: [`
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css";
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css";
    `],
    styleUrls: ["../../assets/css/style.css",
        "../../assets/css/bootstrap.min.css",
        "../../assets/css/jquery.bxslider.css",
        "../../assets/css/jquery-ui.css",
        "../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
        "../../assets/css/jquery.bxslider.min.css",
        "../../assets/css/place_style.css",

        "../../assets/css/fwslider.css",
        "../../assets/css/animate.min.css", "../../assets/css/lightbox.min.css",

    ], providers: [PlaceService, TripService, UserService]


})
export class PlaceDetails {
    place: any[];
    tripsWithPlaces: any[];
    pID: any[];
    placeID: any;
    nor: any;
    private sub: Subscription;

    constructor(private _PlaceService: PlaceService, private _route: ActivatedRoute, private _router: Router
        , private _TripService: TripService, private _UserService: UserService) {

    }


    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.placeID = id;
                this.getPlaceById(id);
                this.getTripByplaceID(id);
            });
    }

    getPlaceById(id: string) {
        this._PlaceService.getplaceById(id).subscribe(place => {
            this.place = place[0];
            console.log(this.place);

        });
    }

    getTripByplaceID(id: string) {
        this.pID = new Array();
        this.pID.push(id);


        var placeid = {
            // place:["591cc3d142e8bc19745157bf"] 
            place: this.pID
        }
        this._TripService.getTripByplaceID(placeid).subscribe(data => {
            JSON.stringify(data);
            this.tripsWithPlaces = data;
            console.log(this.tripsWithPlaces);
            console.log("exo")
        })
    }

    placesVisted() {
        // alert("Chen");
        var UID = localStorage.getItem("UserId");
        console.log(UID);
        this._UserService.updateVisitedPlaces(UID);
    }

    updateUsrV() {
        var UID = localStorage.getItem("UserId");
        var user = this._UserService.getById(UID).subscribe(res => {
            this.nor = res[0];
            this.nor.userVisitedPlace.push(this.placeID);
            this._UserService.updateUser(this.nor);
            console.log(this.placeID)
            console.log("dne")
        });
    }
}