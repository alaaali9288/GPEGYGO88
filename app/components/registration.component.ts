import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/User.service';
import { Router, ActivatedRoute } from '@angular/router';
//local
//import { LocalStorageService } from 'angular-2-local-storage';



@Component({
    moduleId: module.id,
    selector: 'EGYGO-Registration',
    templateUrl: 'html/RegistrationComponent.html',
    styleUrls: ['https://fonts.googleapis.com/css?family=Open+Sans:600', 'css/style2.css']
    , providers: [UserService],
})

export class RegistrationComponent implements OnInit {
    user: any;
    username: string;
    userPassword: string;

    constructor(private UserService: UserService,private _route: ActivatedRoute,
                private _router: Router
               // private localStorageService: LocalStorageService
                ) { }

    ngOnInit() {
        console.log("Ayman");
        // this.UserService.getAllUsers().subscribe(user => this.users = user);

    }

    //onClick button signIn
    signIn() {
        this.checkUserNameandPass(this.username, this.userPassword);
    }


    checkUserNameandPass(uName: string, uPass: string) {

        this.UserService.getUserName(uName, uPass).subscribe((user) => {
            if (user.length > 0) {
            this.user = user[0];
                if (this.userPassword === this.user.userPassword) {
                  //  alert(this.user._id);
                  if (localStorage.getItem("currentUser")===null){
                      
                      localStorage.setItem("currenrtUser",this.user) ;
                      localStorage.setItem("UserId",this.user._id) ;
                         
                this._router.navigate([`/profile/${this.user._id}`]);
                  } else { 
                         
                this._router.navigate([`/profile/${this.user._id}`]);
                  }
                  
                  
              //  this._router.navigate([`/profile/${this.user._id}`]);
                }
                else {
                    alert("password wrong!");
                }
            }
            else{
                alert("User name not found!");
            }
            //  console.log(this.user);

        });

    }

}
// export class RegistrationComponent implements OnInit {


//     backg:string = './app/components/images/';
// constructor(private UserService:UserService){}
//     ngOnInit(){
//         console.log(this.UserService.getAllUsers());
//     }
// }