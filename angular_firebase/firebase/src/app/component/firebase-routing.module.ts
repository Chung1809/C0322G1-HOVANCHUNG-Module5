import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFirebaseComponent} from "./list-firebase/list-firebase.component";
import {CreateFirebaseComponent} from "./create-firebase/create-firebase.component";


const routes: Routes = [
  {
    path: '',
    component: ListFirebaseComponent
  }, {
    path: 'create',
    component: CreateFirebaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule { }
