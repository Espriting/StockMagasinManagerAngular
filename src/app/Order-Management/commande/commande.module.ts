import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainCommandeComponent} from "./main-commande/main-commande.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SingleOrderComponent } from './single-order/single-order.component';
import { MainMyOrderComponent } from './main-my-order/main-my-order.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import {MDBRootModule} from "angular-bootstrap-md";



@NgModule({
  declarations: [
      MainCommandeComponent,
      SingleOrderComponent,
      MainMyOrderComponent,
      ShowOrderComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MDBRootModule
    ]
})
export class CommandeModule { }
