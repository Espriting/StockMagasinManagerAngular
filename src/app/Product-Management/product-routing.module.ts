import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainProductComponent } from './product/main-product/main-product.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {path: 'products', component:MainProductComponent},
  {path: 'details/:id', component:ProductDetailsComponent},
  {path: 'products/details/:id', component:ProductDetailsComponent},
  {path: 'favoris', component:FavorisComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
