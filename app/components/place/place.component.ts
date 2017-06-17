import {Component,OnInit} from '@angular/core';
import { PlaceService } from "../../service/place.service";


@Component({
selector: 'place',
moduleId:module.id,
templateUrl: 'place.template.html',
styleUrls:['../../assets/css/style.css' ,'../../assets/css/place.style.css','../../assets/css/places.css'],
providers:[PlaceService]

})
export class PlaceComponent  implements OnInit{

places:any[];
   constructor(private _PlaceService: PlaceService) { }

    ngOnInit(){
        this._PlaceService.getAllPlaces().subscribe((places)=>{this.places= places;});
    }

}