import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainProductComponent } from './Product-Management/product/main-product/main-product.component';
import { ProductModule } from './Product-Management/product/product.module';
import { SingleProductComponent } from './Product-Management/product/single-product/single-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { userModule } from './User-Management/user/user.module';
import { FavorisComponent } from './Product-Management/favoris/favoris.component';

import { ListStockComponent } from './StockManagement/Stock/list-stock/list-stock.component';
import { AddProductToStockComponent } from './StockManagement/Stock/add-product-to-stock/add-product-to-stock.component';
import { AddStockComponent } from './StockManagement/Stock/add-stock/add-stock.component';
import {userModule} from "./User-Management/user/user.module";
import { CommandeModule } from './Order-Management/commande/commande.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    NotFoundComponent,

    FavorisComponent,

    ListStockComponent,
    AddProductToStockComponent,
    AddStockComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,

    userModule

    ProductModule,
    CommandeModule,
    userModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
