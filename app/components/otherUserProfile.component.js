"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { UserService } from "../service/User.service";
// //rotut
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription }       from 'rxjs/Subscription';
var otherUserProfileComponent = (function () {
    function otherUserProfileComponent() {
        this.name = "chen";
        this.Path = './app/components/';
    }
    return otherUserProfileComponent;
}());
otherUserProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'EGYGO-Profile',
        // template:'<h1>HEWDER</h1>'
        templateUrl: 'html/profileComponent.html',
        styleUrls: [
            'css/circle.css',
            'css/profileStyle.css'
        ],
    })
], otherUserProfileComponent);
exports.otherUserProfileComponent = otherUserProfileComponent;
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
//# sourceMappingURL=otherUserProfile.component.js.map