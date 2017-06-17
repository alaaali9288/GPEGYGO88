import {Component,OnInit} from '@angular/core';
import { TripService } from "../../service/trip.service";
import { TripTypeService } from "../../service/tripType.service";

@Component({
selector: 'trip',
moduleId:module.id,
templateUrl:'trip.template.html',
styleUrls:['../../assets/css/style.css' ,
'../../assets/css/trips.css'],
providers:[TripService,TripTypeService],



})
export class TripComponent implements OnInit{
constructor(private _TripService:TripService, private _TripTypeService:TripTypeService){}

trips:any[];
tripTypes:any[];
tripTypesID:any[];

    ngOnInit(){
        this._TripService.getAllTrips().subscribe((trips)=>{
            this.trips=trips;
          

        })
    }



}