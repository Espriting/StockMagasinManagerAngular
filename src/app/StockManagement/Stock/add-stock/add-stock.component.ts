import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Stock } from 'src/app/model/Stock';
import { ProductService } from 'src/app/Product-Management/service/product.service';
import { DataSharedStockService } from '../../Service/data-shared-stock.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';

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
validatingForm: FormGroup;
@Output() addEvent=new EventEmitter<Stock>();
  constructor( private stockservice:DataSharedStockService,private produitService:ProductService) { }

  ngOnInit(): void {
    this.produitService.getProductsList().subscribe(
      (data)=>{
        this.listProduct=data;
      }//,(err)=>console.log(err),
      //()=>this.listProduct.map((elem)=>elem.code)
      
    ) 
    this.stock=new Stock();
    this.validatingForm = new FormGroup({ //form to add stock 
      'libelle': new FormControl('',[Validators.required,Validators.minLength(16)]),
      'quantity' :new FormGroup({
        'qt':new FormControl ('',[Validators.required,Validators.pattern("[0-9]{8}")]),
        'qtmin':new FormControl ('',[Validators.required,Validators.pattern("[0-9]{8}")]),
      //  'productCode':new FormBuilder().group({productName:[this.listProduct,[Validators.required]]})
      })
    });
  }
 

    save(){  
      console.log(this.stock+"this is ur stock");
      this.listProduct= this.listProduct.filter((elem)=>elem.code==this.selectedOption);//filtre list product with code=slected option
      this.stock.produit=this.listProduct;//initialize product
      this.stockservice.addStock(this.stock);//send product to backend
      this.addEvent.emit(this.stock);
      
    }
    onSubmit() {
      console.log(JSON.stringify(this.validatingForm.value))
    }
}
