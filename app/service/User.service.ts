import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService{

  // private _userUrl = 'localhost:5000/user/all'; 

   constructor(private _http:Http){}
    anyUser:any;


   getUserNor(){
       return this._http.get('http://localhost:5000/user/all').map(res => res.json());
   }



  getById(id:string)  {
      return this._http.get(`http://localhost:5000/user/i/${id}`).map(res => res.json());
  }

getUserName(userName:string, password:string){
  return  this._http.get(`http://localhost:5000/user/un/${userName}`).map(res => res.json());
}

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
        createUser(user:any){
     
           let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
           let body = JSON.stringify(user) ;
            
     return this._http.post("http://localhost:5000/user",body,{headers:headers})
               .map((res:Response) => res.json());
               
              
      }
      getuserByName(uname:string){
      return this._http.get(`http://localhost:5000/user/un/${uname}`).map(res =>res.json());
    }

       getuserByNameAlaa(uname:string){
      return this._http.get(`http://localhost:5000/user/un/${uname}`);
    }
}