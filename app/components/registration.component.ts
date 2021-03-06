import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/User.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import {FormBuilder, FormGroup,FormControl, FormControlName, Validator} from '@angular/forms'

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

    userPass:string;
confPass:string;
     bio:string;

 userEmail:string;
valid:boolean;
userV:boolean;
 TempUser :any;
    constructor(private UserService: UserService,private _route: ActivatedRoute,
                private _router: Router
               // private localStorageService: LocalStorageService
                ) { }

 submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);}

    ngOnInit() {
        console.log("Ayman");
        // this.UserService.getAllUsers().subscribe(user => this.users = user);
       

    }

    //onClick button signIn
    signIn() {
        this.checkUserNameandPass(this.username, this.userPassword);
    }

    // signUp(){
    //   //userOb:[]=this.UserService.getuserByNameAlaa(this.username);
    //        this._router.navigate(["/"]);
    //       // this.checkUserNameandPass(this.username, this.userPassword);// REG
    // }
Validate(){
   var dummy={
       firstName:this.username,
          userName:this.username,
          userPassword:this.userPass,
          email:this.userEmail,
        isDeleted: false,
        userBio:this.bio
   };

        if (this.userPass != this.confPass ) {
          this.valid=false;
          alert("password doesn't match")
        }else {
            this.valid=true;
//            if(this.UserService.getuserByName(this.username)){
//                this.userV=false;
//                alert("userName doesnt exsist")
//            }else
//            {
// this.userV=false;
           
           //()=>this._router.navigate(["/"])
         
           this.UserService.createUser(dummy).subscribe(data=>JSON.stringify(data));
          
           this.UserService.getuserByName(dummy.userName).subscribe(user => {
                   this.TempUser = user[0];
                   console.log(this.TempUser);
                   console.log(this.TempUser._id);
           })
           // localStorage.setItem("currenrtUser",this.TempUser) ;
            //localStorage.setItem("UserId",this.TempUser.user._id);
             console.log("EXO");
         window.location.href = 'http://localhost:3000/loginAndReg';
          // }
         
 
       }}

    checkUserNameandPass(uName: string, uPass: string) {

        this.UserService.getUserName(uName, uPass).subscribe((user) => {
            if (user.length > 0) {
            this.user = user[0];
                if (this.userPassword === this.user.userPassword) {
                  //  alert(this.user._id);
                  if (localStorage.getItem("currenrtUser")===null){
                      
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