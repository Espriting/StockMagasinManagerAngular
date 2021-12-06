import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainCommandeComponent} from "./main-commande/main-commande.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SingleOrderComponent } from './single-order/single-order.component';
import { MainMyOrderComponent } from './main-my-order/main-my-order.component';



@NgModule({
  declarations: [
      MainCommandeComponent,
      SingleOrderComponent,
      MainMyOrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CommandeModule { }
