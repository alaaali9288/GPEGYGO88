import { Pipe,PipeTransform } from '@angular/core';
import {TripTypeService} from "../service/tripType.service";

@Pipe({
    name: 'TripType',
})
export class TripTypePipe implements PipeTransform {
typeName:string;
constructor (private _TripTypeService: TripTypeService){

}

	  transform(id: string):string {
        this._TripTypeService.getTypebyID(id).subscribe((type)=>{
          this.typeName=type[0].type;//type[0].type;
          console.log(this.typeName);
        })
         return this.typeName;
        }
         //.do(str => {this.typeName=str ;});
        //return this.typeName[0].type;
       // return this.typeName; //this._TripTypeService.getTypebyID(id).subscribe((type)=>{this.typeName=type[0].type; console.log(this.typeName);});
      // this.typeName;
     // let exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
  

}

