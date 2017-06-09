import { Component, OnInit } from '@angular/core';

@Component({
   moduleId:module.id,
    selector:'EGYGO-Search',
    //template:'<h1>HEWDER</h1>',
    templateUrl:'html/search.html',
   //templateUrl:'html/search.html',
     styleUrls:[
    'css/fillterstyle.css', ]
     
     
})

export class SearchComponent implements OnInit {

    ngOnInit() {
  
    }

    Path:string = './app/components/';
}