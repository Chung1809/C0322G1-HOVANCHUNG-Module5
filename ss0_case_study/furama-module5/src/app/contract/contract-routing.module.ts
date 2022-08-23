import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "../facility/component/list-facility/list-facility.component";
import {CreateFacilityComponent} from "../facility/component/create-facility/create-facility.component";
import {UpdateFacilityComponent} from "../facility/component/update-facility/update-facility.component";
import {ListContractComponent} from "./component/list-contract/list-contract.component";
import {CreateContractComponent} from "./component/create-contract/create-contract.component";


const routes: Routes = [
  {
    path: '',
    component: ListContractComponent
  }, {
    path: 'create',
    component: CreateContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
