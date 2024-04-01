import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";

const routes: Routes = [
  {
    path:'', component:UsersPageComponent, children:[
      {path:':id', component:UserDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
