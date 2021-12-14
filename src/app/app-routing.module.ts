import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavorisComponent } from './Product-Management/favoris/favoris.component';
import { MainProductComponent } from './Product-Management/product/main-product/main-product.component';
import { ProductDetailsComponent } from './Product-Management/product/product-details/product-details.component';
import { FormUserComponent } from './User-Management/user/form-user/form-user.component';
import { LoginComponent } from './User-Management/user/login/login.component';
import { UserListComponent } from './User-Management/user/user-list/user-list.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./Product-Management/product/product.module').then(m => m.ProductModule) },
  {path: 'login', component: LoginComponent},
    {path: 'users', component: UserListComponent},
    {path:'subscribe', component: FormUserComponent},
  //{path:'', component:MainProductComponent},
  {path:'**', component:NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
