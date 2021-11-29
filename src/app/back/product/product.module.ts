import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainProductComponent } from './main-product/main-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingleProductComponent,
    MainProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[
    MainProductComponent,
    SingleProductComponent
  ]
})
export class ProductModule { }
