import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from "../environments/environment";
import { HttpClientModule} from "@angular/common/http";
import { ListFirebaseComponent } from './component/list-firebase/list-firebase.component';
import { CreateFirebaseComponent } from './component/create-firebase/create-firebase.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFirestoreModule} from '@angular/fire/firestore';




@NgModule({
  declarations: [
    AppComponent,
    ListFirebaseComponent,
    CreateFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
