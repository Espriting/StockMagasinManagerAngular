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
import { MainLivreurCommanndeComponent } from './main-livreur-commannde/main-livreur-commannde.component';
import { CardCommandComponent } from './card-command/card-command.component';
import { MesLivraisonComponent } from './mes-livraison/mes-livraison.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
      MainCommandeComponent,
      SingleOrderComponent,
      MainMyOrderComponent,

      ShowOrderComponent,
       MainLivreurCommanndeComponent,
       CardCommandComponent,
       MesLivraisonComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MDBRootModule,
        NgxPaginationModule
    ]
})
export class CommandeModule { }
