import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SignInComponent} from './layout/sign-in/sign-in.component';
import {SignUpComponent} from './layout/sign-up/sign-up.component';
import {AuthContainerComponent} from './components/auth-container/auth-container.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {LoadingComponent} from './components/loading/loading.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {HomeComponent} from './layout/home/home.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {NumbersOnlyDirective} from "../shared/directives/numbers-only.directive";
import {RouterModule} from "@angular/router";
import {MenuModule} from "primeng/menu";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthContainerComponent,
    LoadingComponent,
    SideMenuComponent,
    HomeComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule,
    ProgressSpinnerModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    PasswordModule,
    DividerModule,
    MenuModule,
  ],
  exports: [SignInComponent, SignUpComponent, LoadingComponent, SideMenuComponent]
})
export class CoreModule {
}
