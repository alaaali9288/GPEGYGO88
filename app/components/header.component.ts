import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'EGYGO-Header',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/HeaderComponent.html',
     styleUrls:['css/style.css',
    ]
     
     
})

export class HeaderComponent {

    logoPath:string = './app/components/images/';

    _localStorge:any=localStorage;
    profilePath:string=`/profile/${localStorage.getItem("UserId")}`;
    logoOut(){
        localStorage.clear();
    }
}
