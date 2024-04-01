import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UsersPageComponent} from "./modules/users/pages/users-page/users-page.component";
import {PostsPageComponent} from "./modules/posts/pages/posts-page/posts-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // {
      //   path: '', redirectTo: 'users', pathMatch: 'full'
      // },
      {
        path: 'users', loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)
      },
      {
        path: 'posts', loadChildren:()=>import('./modules/posts/posts.module').then(m=>m.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
