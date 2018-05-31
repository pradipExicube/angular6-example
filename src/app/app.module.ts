import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//component
import { LikeComponent } from '../components/likecomponent/like.component';

import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyANjUwZ_Xw2ziVE4FTnAI1klvRsWvWGMDY",
  authDomain: "angular6-fda86.firebaseapp.com",
  databaseURL: "https://angular6-fda86.firebaseio.com",
  projectId: "angular6-fda86",
  storageBucket: "",
  messagingSenderId: "668665359043"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    AppComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
