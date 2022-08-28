import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "../body/body/body.component";


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"body"},
  {path:'body',component:BodyComponent},
  {
    path: 'patient',
    loadChildren: () => import('./benh-nhan/benh-nhan.module').then(module => module.BenhNhanModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
