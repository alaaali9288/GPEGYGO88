import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripTypeService{

  // private _userUrl = 'localhost:5000/user/all'; 

   constructor(private _http:Http){}
    anyUser:any;

getTypebyID(id:string){
      return this._http.get(`http://localhost:5000/triptype/i/${id}`).map(res => res.json());
}
  getTripTypeId(name:string)  {      
      return this._http.get(`http://localhost:5000/triptype/n/${name}`)
      .map(res => res.json());
  }
 getTripType()  {
      return this._http.get(`http://localhost:5000/triptype/all`).map(res => res.json());
  }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}