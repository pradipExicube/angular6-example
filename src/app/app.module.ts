import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//ROUTING
import { AppRoutingModule } from './app-routing.module';
//component
import { LikeComponent } from '../components/likecomponent/like.component';
import { CardimageComponent } from '../components/cardimagecomponent/cardimage.component';
//PAGE
import { TestPageComponent } from './test-page/test-page.component';
import { RegistraionComponent } from '../app/registraion/registraion.component';
import { ProfileComponent } from './profile/profile.component';

//FIREBASE
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
    ProfileComponent,
    CardimageComponent,
    RegistraionComponent,
    TestPageComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
