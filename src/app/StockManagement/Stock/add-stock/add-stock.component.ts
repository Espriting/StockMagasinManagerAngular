import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
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
 stock:Stock;
selectedOption:String;
listProduct:Product[];
listProductLibelle:String[];
buttonsaveInformation:boolean;
@Output() addEvent=new EventEmitter<Stock>();
  constructor( private stockservice:DataSharedStockService,private produitService:ProductService) { }

  ngOnInit(): void {
    this.produitService.getProductsList().subscribe(
      (data)=>{
        this.listProduct=data;
      }
    ) 
  }
 

    save(){  
      this.listProduct= this.listProduct.filter((elem)=>elem.code==this.selectedOption);//filtre list product with code=slected option
      this.stock.produit=this.listProduct;//initialize product
      this.stockservice.addStock(this.stock);//send product to backend
      this.addEvent.emit(this.stock);
      
    }

}
