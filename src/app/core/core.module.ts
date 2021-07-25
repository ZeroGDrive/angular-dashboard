import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SignInComponent} from './layout/sign-in/sign-in.component';
import {SignUpComponent} from './layout/sign-up/sign-up.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { LoadingComponent } from './components/loading/loading.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './layout/home/home.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthContainerComponent,
    LoadingComponent,
    SideMenuComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    ProgressSpinnerModule
  ],
    exports: [SignInComponent, SignUpComponent, LoadingComponent, SideMenuComponent]
})
export class CoreModule {
}
