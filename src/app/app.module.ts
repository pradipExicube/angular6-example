import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as firebase from 'firebase';



import { RegistraionComponent } from '../app/registraion/registraion.component';

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
    RegistraionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
