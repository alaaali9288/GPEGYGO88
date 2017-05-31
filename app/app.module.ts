import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {SearchComponent} from './components/search.component';
import * as $ from 'jquery';


@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent,HeaderComponent,FooterComponent, SearchComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
