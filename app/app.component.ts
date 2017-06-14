import { Component } from '@angular/core';

import * as $ from 'jquery';
import { Http } from "@angular/http";

@Component({
    selector: 'pm-app',
    template: `
   <EGYGO-Header></EGYGO-Header>
   <router-outlet></router-outlet>
   <EGYGO-Footer></EGYGO-Footer>
     `,

})
export class AppComponent { 

}
