import{Component}from "@angular/core"
import {TripService} from "../../service/trip.service";
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
"../../assets/css/trip-style.css"]
,providers:[UserService,TripService]

	
})
export class TripContent{
user:any;
    trip:any;
    activities : any[];
    tags: any[];
    tripPicsURLs : any[];
    uId:string;
    phone:any;
      private sub: Subscription;
    constructor(private _TripService :TripService , private _UserService:UserService ,private _route: ActivatedRoute, private _router: Router){}


   ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getTripById(id);
            });
    }

getTripById(tId :string){
    this._TripService.getTripById(tId).subscribe((trip)=>{
        this.trip=trip[0];
        this.activities=trip[0].activities;
    this.tags=trip[0].tags;
    this.tripPicsURLs=trip[0].tripPicsUrl;
    this.uId=trip[0].userID;
    this.getById(this.uId);
    
});
}
getById(id:string){
  
     this._UserService.getById(id).subscribe((user)=>{this.user=user});
}

}