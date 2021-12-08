import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSharedStockService {
  private baseURL=environment.url+"api/stock";
  public tokenUser=localStorage.getItem('tokenUser');
  public token=this.tokenUser!;
  constructor(private httpClient: HttpClient) { }

 

  getStocksList(): Observable<any>{
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.get(this.baseURL+'/getAllStock',{headers});
  }
  addStock(stock:Stock){
    const headers=new HttpHeaders().set("Authorization",this.token);
    console.log(stock);
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
  getexhaustStoc(){
    const headers=new HttpHeaders().set("Authorization",this.token);
    return this.httpClient.get(this.baseURL+'/exhaustStock',{headers, responseType:'text' as 'json'});
  }
}
