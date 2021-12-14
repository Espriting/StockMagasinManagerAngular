import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainCommandeComponent} from "./main-commande/main-commande.component";
import {ShowOrderComponent} from "./show-order/show-order.component";
import {SingleOrderComponent} from "./single-order/single-order.component";
import {MainMyOrderComponent} from "./main-my-order/main-my-order.component";
import {MainLivreurCommanndeComponent} from "./main-livreur-commannde/main-livreur-commannde.component";
import {MesLivraisonComponent} from "./mes-livraison/mes-livraison.component";
const routes: Routes = [
    {path: 'commandes', component:MainCommandeComponent},
    {path: 'showCmd', component:ShowOrderComponent},
    {path: 'addCmd/:id', component:SingleOrderComponent},
    {path: 'mescommandes', component:MainMyOrderComponent},
    {path: 'Livre', component:MainLivreurCommanndeComponent},
    {path: 'MesLivraisons', component:MesLivraisonComponent},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export  class CommandeRoutingModule {}