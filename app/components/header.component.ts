import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'EGYGO-Header',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/HeaderComponent.html',
     styleUrls:['css/style.css','css/dropDown.css'
    ]
     
     
})

export class HeaderComponent {

    logoPath:string = './app/components/images/';

    _localStorge:any=localStorage;
    profilePath:string=`/profile/${localStorage.getItem("UserId")}`;
    logoOut(){
        localStorage.clear();
    }


     myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// window : any = window;
// // Close the dropdown if the user clicks outside of it
// this.window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
}
