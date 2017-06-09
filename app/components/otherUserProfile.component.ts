import { Component, OnInit ,OnDestroy} from '@angular/core';
import * as $ from 'jquery';
// import { UserService } from "../service/User.service";
// //rotut
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription }       from 'rxjs/Subscription';

@Component({
   moduleId:module.id,
    selector:'EGYGO-Profile',
   // template:'<h1>HEWDER</h1>'
    templateUrl:'html/profileComponent.html',
     styleUrls:[
    'css/circle.css',
    'css/profileStyle.css'
      ],
  //   providers:[UserService]
     
})
export class otherUserProfileComponent{
     name:string = "chen";
  
     Path:string = './app/components/';
}
// export class otherUserProfileComponent implements OnInit,OnDestroy {
//     user: any;
//  private sub: Subscription;

//     constructor(private _route: ActivatedRoute,  private _router: Router,private _UserService:UserService) {}
    
//      ngOnInit(): void {
//         this.sub = this._route.params.subscribe(
//             params => {
//                 let id = params['id'];
//                 this.getByID(id);
//         });
//     }

//     getByID(Uid:string){
//   this._UserService.getById(Uid).subscribe((user) => {this.user = user[0];});
//     }
//      ngOnDestroy() {
//         this.sub.unsubscribe();
//     }

//     Path:string = './app/components/';
// }