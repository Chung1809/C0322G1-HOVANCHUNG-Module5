import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BenhNhanListComponent} from "./benh-nhan-list/benh-nhan-list.component";
import {BenhNhanCreateComponent} from "./benh-nhan-create/benh-nhan-create.component";
import {BenhNhanEditComponent} from "./benh-nhan-edit/benh-nhan-edit.component";


const routes: Routes = [
  {
    path: '',
    component: BenhNhanListComponent
  }, {
    path: 'create',
    component: BenhNhanCreateComponent
  }, {
    path: 'edit/:id',
    component: BenhNhanEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenhNhanRoutingModule { }
