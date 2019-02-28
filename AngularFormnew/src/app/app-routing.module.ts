import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ BasicformComponent } from './form/basicform/basicform.component'
import { TableviewComponent } from './form/tableview/tableview.component';

const routes: Routes = [
 {
  path:'register',
  component:BasicformComponent
},{
  path:'table',component:TableviewComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
