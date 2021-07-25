import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import { NumbersOnlyDirective } from './directives/numbers-only.directive';



@NgModule({
  declarations: [
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    PasswordModule,
    DividerModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    PasswordModule,
    DividerModule,
    NumbersOnlyDirective
  ]
})
export class SharedModule { }
