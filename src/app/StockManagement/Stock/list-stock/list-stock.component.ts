import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
displayform:boolean=false;
inputStock: Stock;
//****************Pagination du table**************** */
@ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
@ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
elements: any = [];
previous: any = [];
headElements = ['ID', 'First', 'Last', 'Handle'];
//********************************** */
  constructor(private stockservice:DataSharedStockService,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.stockservice.getStocksList().subscribe(
      (data)=>this.listStocks=data,
      (error)=>console.log(error)
    );
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
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
