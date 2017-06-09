import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
   moduleId:module.id,
    selector:'EGYGO-Addreview',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/addreview.html',
     styleUrls:[
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    'css/addreviewtyle'
      ],
     
     
})

export class AddReviewComponent implements OnInit {

    ngOnInit() {
  
    }

    Path:string = './app/components/';
}