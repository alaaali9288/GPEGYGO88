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
    styleUrls:["../../assets/css/style.css",
"../../assets/css/bootstrap.min.css",
"../../assets/css/jquery-ui.css",
"../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
"../../assets/css/place_style.css",
"../../assets/css/animate.min.css","../../assets/css/placeCSS.css",
"../../assets/css/checkboxStyle.css",
"../../assets/css/rangeStyle.css",
"../../assets/css/StartStyle.css",
"../../assets/css/popUpStyle.css",]
    , providers: [PlaceService, TripService, UserService]


})
export class PlaceDetails {
    place: any;
    tripsWithPlaces: any[];
    pID: any[];
    placeID: any;
    nor: any;
    UserVisit:any;
    UserLoved:any;
    isVisited : boolean;
    isLoved : boolean;
    private sub: Subscription;
    UID : string =localStorage.getItem("UserId");
comment:any;
rate:number
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
          this.checkVistedPlaces(id);
          this.checkifLovedPlace(id);
            //.userVisitedPlace.includes(id)
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

    // placesVisted() {
    //     // alert("Chen");
    //     var UID = localStorage.getItem("UserId");
    //     console.log(UID);
    //     this._UserService.updateVisitedPlaces(UID);
    // }

checkVistedPlaces(id:string){
   // var UID = localStorage.getItem("UserId");
    var visted = this._UserService.getById(this.UID).subscribe(u=>{
        this.UserVisit=u[0].userVisitedPlace;
       this.isVisited =this.UserVisit.indexOf(id)>-1;
       console.log(this.isVisited);
    })
}

checkifLovedPlace(id:string){
  //   var UID = localStorage.getItem("UserId");
    var visted = this._UserService.getById(this.UID).subscribe(u=>{
        this.UserLoved=u[0].userFavPlace;
       this.isLoved =this.UserLoved.indexOf(id)>-1;
       console.log(this.isLoved);
       console.log("loved");
    })
}

removeUsrV(){
var UID = localStorage.getItem("UserId");
    var visted = this._UserService.getById(UID).subscribe(u=>{
        this.UserVisit=u[0].userVisitedPlace;
       var index =this.UserVisit.indexOf(this.placeID);
          console.log(this.UserVisit);
       if (index > -1) {
       this.UserVisit.splice(index, 1);
};
   u[0].userVisitedPlace= this.UserVisit;
     this._UserService.updateUser(u[0]);
       console.log(u[0].userVisitedPlace);

       console.log(this.UserVisit);
    })
}

removeUserFav(){
    var UID = localStorage.getItem("UserId");
    var visted = this._UserService.getById(UID).subscribe(u=>{
        this.UserLoved=u[0].userFavPlace;
       var index =this.UserLoved.indexOf(this.placeID);
          console.log(this.UserLoved);
       if (index > -1) {
       this.UserLoved.splice(index, 1);
};
u[0].userFavPlace= this.UserLoved;
     this._UserService.updateUser(u[0]);
       console.log(u[0].userFavPlace);
    })
}

updateUsrloVe(){
      var UID = localStorage.getItem("UserId");
        var user = this._UserService.getById(UID).subscribe(res => {
            this.nor = res[0];
            this.nor.userFavPlace.push(this.placeID);
            this._UserService.updateUser(this.nor);
            console.log(this.placeID)
            console.log("dne")
        });
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
    addReview(){
 var Rev={
     
  
        content:this.comment,

        DateTime:new Date(),
        isDelete:false,
    rate:this.rate,
        UserID:localStorage.getItem("UserId")
    
 };
 
     this.place.reviews.push(Rev)
        this._PlaceService.updatePlace(this.place).subscribe(data=>JSON.stringify(data))
console.log(this.place.reviews)
}

update(value:number) {
    this.rate = value;
    console.log(this.rate)
  }

}