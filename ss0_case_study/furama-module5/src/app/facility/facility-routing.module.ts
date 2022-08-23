import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "../customer/component/list-customer/list-customer.component";
import {CreateCustomerComponent} from "../customer/component/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "../customer/component/update-customer/update-customer.component";
import {ListFacilityComponent} from "./component/list-facility/list-facility.component";
import {CreateFacilityComponent} from "./component/create-facility/create-facility.component";
import {UpdateFacilityComponent} from "./component/update-facility/update-facility.component";


const routes: Routes = [
  {
    path: '',
    component: ListFacilityComponent
  }, {
    path: 'create',
    component: CreateFacilityComponent
  }, {
    path: 'edit/:id',
    component: UpdateFacilityComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
