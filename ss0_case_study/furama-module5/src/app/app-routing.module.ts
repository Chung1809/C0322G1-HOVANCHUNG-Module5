import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/component/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/component/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./customer/component/update-customer/update-customer.component";
import {ListFacilityComponent} from "./facility/component/list-facility/list-facility.component";
import {CreateFacilityComponent} from "./facility/component/create-facility/create-facility.component";
import {UpdateFacilityComponent} from "./facility/component/update-facility/update-facility.component";
import {ListContractComponent} from "./contract/component/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/component/create-contract/create-contract.component";
import {BodyComponent} from "./body/body/body.component";


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'body'},
  {path:'list-customer',component:ListCustomerComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent},

  {path:'list-facility',component:ListFacilityComponent},
  {path:'create-facility',component:CreateFacilityComponent},
  {path:'update-facility/:id',component:UpdateFacilityComponent},

  {path:'list-contract',component:ListContractComponent},
  {path:'create-contract',component:CreateContractComponent},
  {path:'body',component:BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
