import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Stock } from 'src/app/model/Stock';
import { ProductService } from 'src/app/Product-Management/service/product.service';
import { DataSharedStockService } from '../../Service/data-shared-stock.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormBuilder, Form, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
@Input() stock:Stock;
listProduct:Product[];
listProductLibelle:String[];
validatingForm: FormGroup;
@Output() addEvent=new EventEmitter<Stock>();
//@Output() hideForm=new EventEmitter<Boolean>();
  constructor( private stockservice:DataSharedStockService,private produitService:ProductService) { }

  ngOnInit(): void {
    this.produitService.getProductsList().subscribe(
      (data)=>{
        this.listProduct=data;
      }
      
    )  
    this.validatingForm = new FormGroup({ //form to add stock 
      'libelle': new FormControl('',[Validators.required,Validators.minLength(16)]),
        'qt':new FormControl ('',[Validators.required,Validators.pattern("[0-9]+")]),
        'qtmin':new FormControl ('',[Validators.required,Validators.pattern("[0-9]+")]),
       'productCode':new FormControl('',Validators.required)});
    this.stock=new Stock();
  }
 

    save(myForm:FormGroup){  
      this.stock.libelleStock=myForm.controls['libelle'].value;
      this.stock.qte=myForm.controls['qt'].value;
      this.stock.qteMin=myForm.controls['qtmin'].value;
      //this.listProduct= this.listProduct.filter((elem)=>elem.code==this.validatingForm.controls['productCode'].value);//filtre list product with code=slected option
      //this.stock.produit=this.listProduct;//initialize product
      this.stockservice.addStock(this.stock).subscribe();//send product to backend
      this.addEvent.emit(this.stock);  
    }
}
