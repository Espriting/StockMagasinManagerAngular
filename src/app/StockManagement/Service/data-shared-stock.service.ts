import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSharedStockService {
  private baseURL=environment.url+"api/stock";
  public tokenUser=localStorage.getItem('tokenUser');
  public token=this.tokenUser!;
  public listFiltredStock:Stock[];
  constructor(private httpClient: HttpClient) { }
  getStocksList(): Observable<any>{
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.get(this.baseURL+'/getAllStock',{headers});
  }
  addStock(stock:Stock){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.post(this.baseURL+'/addStock',stock,{headers});
    
  }
  updateStock(stock:Stock){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.put(this.baseURL+'/updateStock',stock,{headers, responseType:'text' as 'json'});
    
  }
  deleteStock(idStock: number){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.delete(this.baseURL+'/deleteStock/'+idStock,{headers});
  }

  getStockById(idStock: number){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.get(this.baseURL+'/getStockById/'+idStock,{headers, responseType:'text' as 'json'});
  }
  getexhaustStock(): Observable<any>{
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.get(this.baseURL+'/exhaustStock',{headers});
  }
  filterData(criteria:String): Observable<any>{
  
    this.getStocksList().subscribe(
      (data)=>this.listFiltredStock=data
      )
      if(criteria==="noExausted"){
        return of(this.listFiltredStock.filter((stock_elem)=>stock_elem.qteMin<stock_elem.qte));
 
      }else if(criteria==="All"){
        return this.getStocksList();

      }
      else{
        return this.getexhaustStock() ;
      }
  }
}
