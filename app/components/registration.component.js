"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_service_1 = require("../service/User.service");
var router_1 = require("@angular/router");
//local
//import { LocalStorageService } from 'angular-2-local-storage';
var RegistrationComponent = (function () {
    function RegistrationComponent(UserService, _route, _router
        // private localStorageService: LocalStorageService
    ) {
        this.UserService = UserService;
        this._route = _route;
        this._router = _router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        console.log("Ayman");
        // this.UserService.getAllUsers().subscribe(user => this.users = user);
    };
    //onClick button signIn
    RegistrationComponent.prototype.signIn = function () {
        this.checkUserNameandPass(this.username, this.userPassword);
    };
    RegistrationComponent.prototype.checkUserNameandPass = function (uName, uPass) {
        var _this = this;
        this.UserService.getUserName(uName, uPass).subscribe(function (user) {
            if (user.length > 0) {
                _this.user = user[0];
                if (_this.userPassword === _this.user.userPassword) {
                    //  alert(this.user._id);
                    if (localStorage.getItem("currentUser") === null) {
                        localStorage.setItem("currenrtUser", _this.user);
                        localStorage.setItem("UserId", _this.user._id);
                        _this._router.navigate(["/profile/" + _this.user._id]);
                    }
                    else {
                        _this._router.navigate(["/profile/" + _this.user._id]);
                    }
                    //  this._router.navigate([`/profile/${this.user._id}`]);
                }
                else {
                    alert("password wrong!");
                }
            }
            else {
                alert("User name not found!");
            }
            //  console.log(this.user);
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'EGYGO-Registration',
        templateUrl: 'html/RegistrationComponent.html',
        styleUrls: ['https://fonts.googleapis.com/css?family=Open+Sans:600', 'css/style2.css'],
        providers: [User_service_1.UserService],
    }),
    __metadata("design:paramtypes", [User_service_1.UserService, router_1.ActivatedRoute,
        router_1.Router
        // private localStorageService: LocalStorageService
    ])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
// export class RegistrationComponent implements OnInit {
//     backg:string = './app/components/images/';
// constructor(private UserService:UserService){}
//     ngOnInit(){
//         console.log(this.UserService.getAllUsers());
//     }
// } 
//# sourceMappingURL=registration.component.js.map