import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./core/layout/sign-in/sign-in.component";
import {SignUpComponent} from "./core/layout/sign-up/sign-up.component";
import {HomeComponent} from "./core/layout/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
