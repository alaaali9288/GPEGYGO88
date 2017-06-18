import {Component} from '@angular/core';
import { PlaceService} from "../../service/place.service";
//rotut
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {OnInit} from "@angular/core";
@Component({
    selector: 'offers',
    moduleId: module.id,
    templateUrl:'offers.template.html',
    styleUrls:[ '../../assets/css/style.css' ,'../../assets/css/offers.css'],
    providers:[PlaceService]
})
export class OffersComponent implements OnInit{
constructor(private _route: ActivatedRoute, private _router: Router,
    private _PlaceService:PlaceService){}

places:any;
fivePlaces:any;
ngOnInit(){
this._PlaceService.getAllPlaces().subscribe(place=> {this.places=place;
this.fivePlaces=this.places.slice(0, 6);
console.log(this.fivePlaces)});
}

}