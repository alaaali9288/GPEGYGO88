import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestMethod } from '@angular/http';
import { TripService } from '../service/trip.service';
import { FormBuilder, FormGroup, FormControl, FormControlName, Validator } from '@angular/forms'
import { TripTypeService } from '../service/tripType.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'eg-addTrip',
    templateUrl: './html/addTrip.component.html',
    styleUrls: ['./css/addPlace.component.css',
        './css/style.css',
        './css/bootstrap.min.css',
        //  './css/select2.min.css',
        //  './css/dropzone.css',
        //  './css/fwslider.css'
    ],
    providers: [TripService, TripTypeService]
})

export class addTrip implements OnInit {
    constructor(private _placeService: TripService, private _tripTypeService: TripTypeService, private _router: Router) { } //private fb: FormBuilder

    title: string;
    price: number;
    busLeave: string;
    description: string;
    busBack: string;
    dateFrom: Date;
    dateTo: Date;
    tags: string[] = [];
    activities: string[] = [];
    activ: string[] = [];
    tripURL: string;
    phone: string;
    city: string;
    TripTypes: string[];
    TripTypeId: any;
    typeName: string;
    holidayType: string[] = [];
    busLeaveLoc: string;
    busBackLoc: string;
    tagtxt: string;
    activity: string;
    ngOnInit() {
        this._tripTypeService.getTripType().subscribe(triptypes => this.TripTypes = triptypes)

    }
    selectIngredientActiv(select: any): void {
        //  var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendActiv");

        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(this.activity);  // selected text

        input.type = 'hidden';
        input.name = 'activities[]';
        //   input.value = select.target.options[option].value;

        a.setAttribute('onclick', 'this.parentNode.remove(this);');//
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;');//        
        a.innerHTML = '&times;';//

        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
        this.activities.push(this.activity);
    }
    //select multiple
    selectIngredientTag(select: any): void {
        //  var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendTag");

        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(this.tagtxt);  // selected text

        input.type = 'hidden';
        input.name = 'activities[]';
        //   input.value = select.target.options[option].value;

        a.setAttribute('onclick', 'this.parentNode.remove(this);');//
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;');//        
        a.innerHTML = '&times;';//

        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
        this.tags.push(this.tagtxt);
    
    }


    //select multiple
    selectIngredientPlaces(select: any): void {
        var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendPlaces");

        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(select.target.options[option].value);  // selected text

        input.type = 'hidden';
        input.name = 'activities[]';
        input.value = select.target.options[option].value;

        a.setAttribute('onclick', 'this.parentNode.remove(this);');//
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;');//        
        a.innerHTML = '&times;';//

        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
        this.activ.push(input.value);

        this.typeName = input.value;
        this._tripTypeService.getTripTypeId(this.typeName)
            .subscribe(triptypeId => {

                for (let t = 0; t < triptypeId.length; t++) {

                    this.TripTypeId = triptypeId[t]._id;
                    this.holidayType.push(this.TripTypeId);
                }
            })
    }


    // addPlaceForm: FormGroup ;

    addTrip() {

        var trip = {
            title: this.title,
            price: this.price,
            busLeave: this.busLeave,
            busBack: this.busBack,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            description: this.description,
            userID: localStorage.getItem("UserId"),
            tags: this.tags,
            activities: this.activities,
            isDeleted: false,
            lastEdit: new Date(),
            locFrom: this.busLeaveLoc,
            locTo: this.busBackLoc,
            holidayType: this.holidayType

        }


        this._placeService.createTrip(trip)
            .subscribe(data => JSON.stringify(data),
            () => this._router.navigate(["/trips"]));



    }



}