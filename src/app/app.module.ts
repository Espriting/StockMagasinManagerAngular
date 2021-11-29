import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackModule } from './back/back.module';
import { HeaderComponent } from './back/header/header.component';
import { MenuComponent } from './back/menu/menu.component';
import { MainProductComponent } from './back/product/main-product/main-product.component';
import { ProductModule } from './back/product/product.module';
import { SingleProductComponent } from './back/product/single-product/single-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
