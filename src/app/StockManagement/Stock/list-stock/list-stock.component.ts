import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Product } from 'src/app/model/product';
import { Stock } from 'src/app/model/Stock';
import { DataSharedStockService } from '../../Service/data-shared-stock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit,AfterViewInit {
listStocks:Stock[];
listProdcut:Product[];
inputSearch:any;
displayform:boolean;
inputStock: Stock;
listExhaustStock :Stock[];
//****************Pagination du table**************** */
@ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
@ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
elements: any = [];
previous: any = [];
headElements = ['ID', 'Libelle', 'Actuel quantity', 'Minimal Quantity','Action'];
//********************************** */
  constructor(private stockservice:DataSharedStockService,private cdRef: ChangeDetectorRef) { }
  //initlize componnent
  ngOnInit(): void {
    this.displayform=false;
    this.stockservice.getStocksList().subscribe(
      (data)=>this.listStocks=data,
      (error)=>console.log(error)
    );
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), i});
}
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    this.stockservice.getexhaustStock().subscribe(
      (data)=>this.listExhaustStock=data,
      (err)=>console.log(err)
      );
    
  }
  //calculate and detecter pagination information
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
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
    this.stockservice.deleteStock(idStock).subscribe();
    let indexOfStockToDelete=this.listStocks.findIndex(res=>res.idStock==idStock);
    this.listStocks.splice(indexOfStockToDelete,1);

  }
  displayFormTemplate(){
    this.displayform=(this.displayform==true)?false:true;
  }
  addItem(newStock: Stock) {
    this.displayform=true;
    this.listStocks.unshift(newStock);
  }
  editStock(stock:Stock){

    let exist:boolean=false;
    this.inputStock=stock;
    this.listStocks.forEach((elem)=>{
      if(elem.idStock==stock.idStock){
        elem=stock;
        this.stockservice.updateStock(stock).subscribe();
        exist=true;
      }
    });
    if(!exist){
      this.addItem(stock);
      this.stockservice.addStock(stock).subscribe();
    }
    //this.displayFormTemplate();
  }
    filter(criteria:String){
     
        this.stockservice.filterData(criteria).subscribe((data)=>{
          this.listStocks=data;});

    }
}
