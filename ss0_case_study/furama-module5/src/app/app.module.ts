import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/component/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/component/update-customer/update-customer.component';
import { ListFacilityComponent } from './facility/component/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/component/create-facility/create-facility.component';
import { UpdateFacilityComponent } from './facility/component/update-facility/update-facility.component';
import { ListContractComponent } from './contract/component/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/component/create-contract/create-contract.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BodyComponent } from './body/body/body.component';
import { ListFacilityTypeComponent } from './facility-type/component/list-facility-type/list-facility-type.component';
import { ListCustomerTypeComponent } from './customer-type/component/list-customer-type/list-customer-type.component';
import { ListRentTypeComponent } from './rent-type/component/list-rent-type/list-rent-type.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent,
    ListContractComponent,
    CreateContractComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListFacilityTypeComponent,
    ListCustomerTypeComponent,
    ListRentTypeComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
