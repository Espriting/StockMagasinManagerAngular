
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MainProductComponent} from './Product-Management/product/main-product/main-product.component';
import {ProductDetailsComponent} from './Product-Management/product/product-details/product-details.component';
import {LoginComponent} from "./User-Management/user/login/login.component";
import {FormUserComponent} from "./User-Management/user/form-user/form-user.component";
import {UserListComponent} from "./User-Management/user/user-list/user-list.component";
import {UserForgetComponent} from "./User-Management/user/user-forget/user-forget.component";
import {UserUpdateComponent} from "./User-Management/user/user-update/user-update.component";
import { AddStockComponent } from './StockManagement/Stock/add-stock/add-stock.component';
import { ListStockComponent } from './StockManagement/Stock/list-stock/list-stock.component';
import { MainCommandeComponent } from './Order-Management/commande/main-commande/main-commande.component';
import { MainMyOrderComponent } from './Order-Management/commande/main-my-order/main-my-order.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";


const routes: Routes = [
    {path: 'products', component: MainProductComponent},
    {path: 'commandes', component:MainCommandeComponent},
    {path: 'mescommandes', component:MainMyOrderComponent},
    {path: 'details/:id', component: ProductDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forget', component: UserForgetComponent},
    {path:'stock/addStock',component:AddStockComponent},
    {path:'stock/listStock',component:ListStockComponent},
    {path: 'users', component: UserListComponent},
    {path: 'update/:id', component: UserUpdateComponent},
    {path: 'products/details/:id', component: ProductDetailsComponent},
    {path: '', component: MainProductComponent},
    {path:'subscribe', component: FormUserComponent},
    {path: '**', component: NotFoundComponent},




];

@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule,  MDBBootstrapModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
