import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Stock } from 'src/app/model/Stock';
import { ProductService } from 'src/app/Product-Management/service/product.service';
import { DataSharedStockService } from '../../Service/data-shared-stock.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
stock:Stock=new Stock();
listProduct:Product[];
listProductLibelle:String[];
  constructor( private stockservice:DataSharedStockService,private produitService:ProductService) { }

  ngOnInit(): void {
    this.produitService.getProductsList().subscribe(
      (data)=>this.listProduct=data
    ) }
    save(){  
      this.stock.produit=[];
      this.stockservice.addStock(this.stock).subscribe((elem)=>console.log(elem));
      
    }

}
