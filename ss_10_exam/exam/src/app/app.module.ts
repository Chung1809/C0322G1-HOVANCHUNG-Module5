import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer/footer.component";
import {HeaderComponent} from "./header/header/header.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
// @ts-ignore
import { BenhNhanComponent } from './benh-nhan/benh-nhan/benh-nhan.component';
import { BenhNhanListComponent } from './benh-nhan/benh-nhan-list/benh-nhan-list.component';
import { BenhNhanEditComponent } from './benh-nhan/benh-nhan-edit/benh-nhan-edit.component';
import { BenhNhanCreateComponent } from './benh-nhan/benh-nhan-create/benh-nhan-create.component';
// @ts-ignore
import { BenhAnListComponent } from './benh-an/benh-an-list/benh-an-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BenhNhanListComponent,
    BenhNhanEditComponent,
    BenhNhanCreateComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
