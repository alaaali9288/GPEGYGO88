import{Component}from "@angular/core"
import {TripService} from "../../service/trip.service";
import { PlaceService} from "../../service/place.service";
import {UserService} from "../../service/user.service";
import {OnInit} from "@angular/core";
//rotut
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId:module.id,
selector:"trip-page",
templateUrl:"./trip.component.html",
 styles: [`
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css";
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css";
    `],
styleUrls:[
"../../assets/css/bootstrap.min.css",
"../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
"../../assets/css/trip-style.css",
"../../assets/css/checkboxStyle.css",
"../../assets/css/rangeStyle.css",
"../../assets/css/StartStyle.css",
"../../assets/css/popUpStyle.css",
]
,providers:[UserService,TripService,PlaceService],

	
})
export class TripContent{
user:any;
reviews:any;
    trip:any;
    activities : any[];
    placesID : any[];
    places : any[];
    tags: any[];
    tripPicsURLs : any[];
    uId:string;
    phone:any;
    rate:number
    comment:any;
   range:Array<number> = [1,2,3,4,5];
   stars:any;
      private sub: Subscription;
    constructor(private _TripService :TripService , private _UserService:UserService ,private _route: ActivatedRoute, private _router: Router,
    private _PlaceService:PlaceService){}


   ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getTripById(id);
            });
           
    }
 update(value:number) {
    this.rate = value;
    console.log(this.rate)
  }

getTripById(tId :string){
    this._TripService.getTripById(tId).subscribe((trip)=>{
        this.trip=trip[0];
        this.activities=trip[0].activities;
        this.placesID=trip[0].places;
    this.tags=trip[0].tags;
    this.tripPicsURLs=trip[0].tripPicsUrl;
    this.uId=trip[0].userID;
    this.getById(this.uId);
    this.uPlaces(this.placesID);
     this.reviews=this.trip.reviews;

     
    
});
}
getById(id:string){
  
     this._UserService.getById(id).subscribe((user)=>{this.user=user});
}


uPlaces(Placess:any[]){
this.places = new Array();
for (let placeId of  Placess){
    this._PlaceService.getplaceById(placeId).subscribe((place)=>{
     this.places.push(place[0]);
    ; console.log(this.places);
    ; console.log("Exo");})
}
}
addReview(){
 var Rev={
     
  
        content:this.comment,

        DateTime:new Date(),
        isDelete:false,
rate:this.rate,
        UserID:localStorage.getItem("UserId")
    
 };
 
     this.trip.reviews.push(Rev)
        this._TripService.updateTrip(this.trip).subscribe(data=>JSON.stringify(data))
console.log(this.trip.reviews)
}


}