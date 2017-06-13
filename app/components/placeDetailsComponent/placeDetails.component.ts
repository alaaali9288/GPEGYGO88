import{Component}from "@angular/core";
import {PlaceService} from "../../service/place.Service";
//rotut
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId:module.id,
selector:"place-detail",
templateUrl:"./placeDetails.component.html",
 styles: [`
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css";
        @import "https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css";
    `],
styleUrls:["../../assets/css/style.css",
"../../assets/css/bootstrap.min.css",
"../../assets/css/jquery.bxslider.css",
"../../assets/css/jquery-ui.css",
"../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
"../../assets/css/jquery.bxslider.min.css",
"../../assets/css/place_style.css",

"../../assets/css/fwslider.css",
"../../assets/css/animate.min.css","../../assets/css/lightbox.min.css",

],providers:[PlaceService]

	
})
export class PlaceDetails{
 place : any[];
     private sub: Subscription;

     constructor(private _PlaceService: PlaceService,private _route: ActivatedRoute, private _router: Router
){

     }


       ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getPlaceById(id);
            });
    }

    getPlaceById(id:string){
        this._PlaceService.getplaceById(id).subscribe(place => {
            this.place=place[0];
            console.log(this.place);
            
        });
    }
}