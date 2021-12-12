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
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {FactureModule} from "./Facture-Management/facture/facture.module";
import {CommonModule} from "@angular/common";
import {AccompteModule} from "./Accompte-Management/accompte/accompte.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    NotFoundComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ProductModule,
    FactureModule,
    AccompteModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
