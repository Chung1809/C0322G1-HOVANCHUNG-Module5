import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseRoutingModule } from './firebase-routing.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    ReactiveFormsModule
  ]
})
export class FirebaseModule { }
