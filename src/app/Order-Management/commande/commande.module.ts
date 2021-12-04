import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainCommandeComponent} from "./main-commande/main-commande.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
      MainCommandeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CommandeModule { }
