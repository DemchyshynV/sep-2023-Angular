import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersPageComponent,
    UserComponent,
    UserDetailsPageComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
