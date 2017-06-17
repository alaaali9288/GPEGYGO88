import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripService{

  // private _userUrl = 'localhost:5000/user/all'; 

   constructor(private _http:Http){}
    anyUser:any;

trips :any[];

  getTripById(id:string)  {
      return this._http.get(`http://localhost:5000/trip/i/${id}`).map(res => res.json());
  }

getAllTrips(){
  return this._http.get("http://localhost:5000/trip/all").map(res => res.json());
}

 getTripByplaceID(Pid:any){

 let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
        //    let options = new RequestOptions({ headers: headers });
           let body = JSON.stringify(Pid) ;
            
     return this._http.post("http://localhost:5000/trip/places",body,{headers:headers})
               .map((res:Response) => res.json());

 }

getAllTripsLeader(){
  return this._http.get("http://localhost:5000/trip/AllLeader").map(res => res.json());
}

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
     createTrip(trip:any){
     
           let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
           let body = JSON.stringify(trip) ;
            
     return this._http.post("http://localhost:5000/trip",body,{headers:headers})
               .map((res:Response) => res.json());
               
              
      }
           updateTrip(trip:any){
     
           let headers = new Headers({ 'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin': '*'});
           let body = JSON.stringify(trip) ;
            
     return this._http.post("http://localhost:5000/trip/update",body,{headers:headers})
               .map((res:Response) => res.json());
               
              
      }
}