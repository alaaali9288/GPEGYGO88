import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
   moduleId:module.id,
    selector:'EGYGO-Search',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/searchComponent.html',
     styleUrls:[
    './css/contentFiltter2.css',
      ]
     
     
})

export class SearchComponent implements OnInit {

    ngOnInit() {
  
    }

    Path:string = './app/components/';
}