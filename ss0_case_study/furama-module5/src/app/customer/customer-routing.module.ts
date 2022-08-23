import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./component/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./component/update-customer/update-customer.component";


const routes: Routes = [
  {
    path: '',
    component: ListCustomerComponent
  }, {
    path: 'create',
    component: CreateCustomerComponent
  }, {
    path: 'edit/:id',
    component: UpdateCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
