import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'EGYGO-Footer',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/FooterComponent.html',
     styleUrls:['css/style.css',
     'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700',
     'css/reset.css',
     'css/fillterstyle.css',
     'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800',
     'css/jquery-ui.css',
     'css/zalki_hover_img.css']
     
})

export class FooterComponent {

    logoPath:string = './app/components/images/';
}