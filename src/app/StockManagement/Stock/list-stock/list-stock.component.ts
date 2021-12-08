import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Stock } from 'src/app/model/Stock';
import { DataSharedStockService } from '../../Service/data-shared-stock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {
listStocks:Stock[];
listProdcut:Product[];
inputSearch:any;
displayform:boolean=false;
inputStock: Stock;
  constructor(private stockservice:DataSharedStockService) { }

  ngOnInit(): void {
    this.stockservice.getStocksList().subscribe(
      (data)=>this.listStocks=data,
      (error)=>console.log(error)
    )
  }
  searchStock(){
if (this.inputSearch==""){
  this.ngOnInit();
}else {
  this.listStocks=this.listStocks.filter(res=>
    res.libelleStock.toLocaleLowerCase().match(this.inputSearch.toLocaleLowerCase()))
}
  }
  deleteStock(idStock:number){
    this.stockservice.deleteStock(idStock);
    let indexOfStockToDelete=this.listStocks.findIndex(res=>res.idStock==idStock);
    this.listStocks.splice(indexOfStockToDelete,1);

  }
  displayFormTemplate(){
    this.displayform=(this.displayform==true)?false:true;
  }
  addItem(newStock: Stock) {
    this.listStocks.push(newStock);
    console.log(newStock);
  }
}
