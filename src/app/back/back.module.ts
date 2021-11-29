import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './product/product.module';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ContentComponent
  ]
})
export class BackModule { }
