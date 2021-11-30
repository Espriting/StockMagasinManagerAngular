import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainProductComponent } from './Product-Management/product/main-product/main-product.component';
import { ProductDetailsComponent } from './Product-Management/product/product-details/product-details.component';


const routes: Routes = [
  {path: 'products', component:MainProductComponent},
  {path: 'details/:id', component:ProductDetailsComponent},
  {path: 'products/details/:id', component:ProductDetailsComponent},
  {path:'', component:MainProductComponent},
  {path:'**', component:NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
