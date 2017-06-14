import { Component, OnInit } from '@angular/core';
import {PlaceService}from'../service/place.service';
import {TripTypeService}from'../service/tripType.service';
import {FormBuilder, FormGroup,FormControl, FormControlName, Validator} from '@angular/forms'
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'review',
    templateUrl: './html/review.html',
    styleUrls: ['./css/rangeStyle.css',
        './css/checkboxStyle.css',
        './css/StartStyle.css',
        './css/popUpStyle.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    ]
})

export class review implements OnInit {
        
   ngOnInit(){

   }



}