import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainProductComponent } from './main-product/main-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductRoutingModule } from '../product-routing.module';



@NgModule({
  declarations: [
    SingleProductComponent,
    MainProductComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    ProductRoutingModule
  ],
  exports:[
    MainProductComponent,
    SingleProductComponent
  ]
})
export class ProductModule { }
