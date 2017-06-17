import { Component, OnInit } from '@angular/core';
import {PlaceService}from'../service/place.service';
import {TripTypeService}from'../service/tripType.service';
import {FormBuilder, FormGroup,FormControl, FormControlName, Validator} from '@angular/forms'
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'eg-updatePlace',
    templateUrl: './html/updatePlace.component.html',
    styleUrls: ['./css/addPlace.component.css',
        './css/style.css',
        './css/BoxStyle.css',
        './css/inputFileStyle.css',
        './css/bootstrap.min.css',
         './font-awesome-4.7.0/css/font-awesome.min.css'
    ],providers:[PlaceService,TripTypeService]
})

export class updatePlace {
        private sub: Subscription;
    placeName:string;
    city:string;
    address:string;
description:string;
 lastEdit:Date;
holidayType:string[]=[];
activ:string[] = [];
typeName:string;
  nam:string[]=[];
  TripTypes:string[];
TripTypeId:any;
tagTxt:string;
tags:string[]=[];
activity:string;
files:FileList;
place:any[];
id:string;

    constructor(private _placeService:PlaceService,private _tripTypeService:TripTypeService,private _router: Router,private _route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getById(id);
            });

        this._tripTypeService.getTripType().subscribe(triptypes=>this.TripTypes=triptypes);
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function (input: any) {
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function (e: any) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener('focus', function () { input.classList.add('has-focus'); });
            input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
        });
      
    }
    getById(id:string){
        this._placeService.getplaceById(id).subscribe(place => {
            this.place=place[0];
            this.placeName=place[0].placeName;
            this.city=place[0].cityName;
           this.address=place[0]. address;
this.description=place[0].description;

this.id=place[0]._id;
 
            console.log(this.place)
            
        });}

  
    //select multiple
    selectIngredient(select: any): void {
        var ul = document.getElementById("ulAppend");

        var li = document.createElement('li');
        var input = document.createElement('input');
        var activity=this.activity;
        var a = document.createElement('a');    //   <button class="close">&times;</button>
        var text1 = document.createTextNode(activity);  // selected text

        input.type = 'hidden';
        input.name = 'activities[]';
      //  input.value = select.target.options[option].value;

        this.nam.push(activity);
        //btn.setAttribute('class', 'close');//
        a.setAttribute('onclick', 'this.parentNode.remove(this);console.log(this.previousSibling.value); ');//
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;');//        
        //a.setAttribute('onClick', 'popinArray()');//                
        a.innerHTML ='&times;';//

        li.appendChild(input);
        li.appendChild(a);      //
        li.appendChild(text1);
        //li.setAttribute('onclick', 'this.parentNode.removeChild(this);');
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
    
        
        console.log(this.nam);
        console.log( li);
        
        //console.log(this.activ);
        
       
    }

getFiles(event:any){
this.files=event.target.files;
console.log("d5l fl change")
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
        a.innerHTML ='&times;';//

        li.appendChild(input);
        li.appendChild(a);
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
this.typeName=input.value;
         this._tripTypeService.getTripTypeId(this.typeName)
         .subscribe(triptypeId=>{
            
              for (let t=0 ; t<triptypeId.length ;t++){
               this.TripTypeId = triptypeId[t]._id;
                    this.holidayType.push(this.TripTypeId);
          }
         })
        
       
        
    
     //   console.log(this.TripTypeId)

    }



//select multiple
    selectIngredientTags(select: any): void {
       // var option = select.target.options.selectedIndex;     //selected index
        var ul = document.getElementById("ulAppendTags");
var txt=this.tagTxt;
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        var text = document.createTextNode(txt);  // selected text
 console.log(txt);
        input.type = 'hidden';
        input.name = 'Tags[]';
        //input.value = select.target.options[option].value;

        a.setAttribute('onclick', 'this.parentNode.remove(this);');//
        a.setAttribute('style', 'font-size:20px; text-decoration:none; margin-right:5px; padding: 0 3px; background-color:#F8CA4D;');//        
        a.innerHTML ='&times;';//

        li.appendChild(input);
        li.appendChild(a); 
        li.appendChild(text);
        li.setAttribute('style', 'display:inline; padding:8px;');

        ul.appendChild(li);
        this.tags.push(txt);
        console.log(this.tags)

    }




   

     updatePlace(){


        //this.nam.push(input.value);
        
 this.activ = this.nam;
       // this.activ=;

        var  place={
            _id:this.id,
placeName:this.placeName,
cityName:this.city,
address:this.address,
description:this.description,
userID:localStorage.getItem("UserId"),
tags:this.tags,
activities:this.activ,
isDeleted: false,
 lastEdit:new Date(),
 holidayType:this.holidayType,

    }

           this._placeService.updatePlace(place)
           .subscribe(data=>JSON.stringify(data),
           ()=>console.log("bbbb")//this._router.navigate(["/places"]));

           );  
     }



}