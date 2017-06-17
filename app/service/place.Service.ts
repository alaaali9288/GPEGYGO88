import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PlaceService{

  // private _userUrl = 'localhost:5000/user/all'; 

   constructor(private _http:Http){}
    anyUser:any;

  getplaceById(id:string)  {
      return this._http.get(`http://localhost:5000/place/i/${id}`).map(res => res.json());
  }
getAllPlaces(){
    return this._http.get("http://localhost:5000/place/all").map(res=> res.json());
}





getAllPlacesLeader(){
    return this._http.get("http://localhost:5000/place/AllLeader").map(res=> res.json());
}
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
     createPlace(place:any){
          
           let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
        //    let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(place) ;
            
     return this._http.post("http://localhost:5000/place",body,{headers:headers})
               .map((res:Response) => res.json());
               
              
      }
      updatePlace(place:any){
              let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
        //    let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(place) ;
            
     return this._http.post("http://localhost:5000/place/update",body,{headers:headers})
               .map((res:Response) => res.json());
      }
}