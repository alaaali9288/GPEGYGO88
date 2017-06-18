import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

    // private _userUrl = 'localhost:5000/user/all'; 

    constructor(private _http: Http) { }
    anyUser: any;
    userVP: any;


    getUserNor() {
        return this._http.get('http://localhost:5000/user/all').map(res => res.json());
    }



    getById(id: string) {
        return this._http.get(`http://localhost:5000/user/i/${id}`).map(res => res.json());
    }

    getUserName(userName: string, password: string) {
        return this._http.get(`http://localhost:5000/user/un/${userName}`).map(res => res.json());
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    createUser(user: any) {

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let body = JSON.stringify(user);

        return this._http.post("http://localhost:5000/user", body, { headers: headers })
            .map((res: Response) => res.json());


    }
    getuserByName(uname: string) {
        return this._http.get(`http://localhost:5000/user/un/${uname}`).map(res => res.json());
    }

    getuserByNameAlaa(uname: string) {
        return this._http.get(`http://localhost:5000/user/un/${uname}`);
    }

    // updateVisitedPlaces(Uid: string) {
    //    // this.getById(Uid).subscribe(user => {
    //      //   this.userVP = user[0];
    //       //  this.userVP.userVisitedPlace.push("593ab7839770e412c09158a5");
    //          var user ={
    //              _id:Uid,
    //             userVisitedPlace: ["593ab7839770e412c0915999"]
    //          };
    //          this.updateUser(user).subscribe(data=>JSON.stringify(data),()=>console.log("bbbb"));
    //         // console.log("EXO");
    //         // console.log(this.userVP.userVisitedPlace);
    //     }
    

     updateUser(User:any){
         console.log("hajar");
         let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
          // let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(User);
           return this._http.post("http://localhost:5000/user/update",body,{headers:headers})
               .map(res => res.json())
               .subscribe(data => { console.log("zaft => ",data)});
               
      }
      ////////////////////////////

      updateUserTrips(user:any){
  let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
          // let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(user);
           return this._http.post("http://localhost:5000/user/updatetrips",body,{headers:headers})
               .map(res => res.json())
               .subscribe(data => {data});
      }
       updateUserPlace(place:any){
              let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
        //    let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(place) ;
            
     return this._http.post("http://localhost:5000/user/updateplaces",body,{headers:headers})
               .map((res:Response) => res.json()).subscribe(data=>{data});
      }


}