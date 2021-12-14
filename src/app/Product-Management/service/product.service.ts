import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL=environment.url+"produit";
  public tokenUser=localStorage.getItem('tokenUser');
  public token=this.tokenUser!;
  constructor(private HttpClient: HttpClient) { }


  /*getToken(username:any, password:any){
    let body = new URLSearchParams();
    body.set('nom',username);
    body.set('password',password);
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    console.log(body.toString())
    httpOptions.headers =httpOptions.headers.set('Content-type', 'application/x-www-form-urlencoded');
    return this.HttpClient.post('http://localhost:8118/StockMagasinManager/login',body.toString(),httpOptions);


  }*/

  getProductsList(token: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
     return this.HttpClient.get(this.baseURL+'/display',httpOptions);

  }

  addProduct(product: Product,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.post(this.baseURL+'/add',product,httpOptions);
  }

  updateProduct(product: Product,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.put(this.baseURL+'/update',product,httpOptions);
  }

  deleteProduct(idProduct: number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.delete(this.baseURL+'/delete/'+idProduct,httpOptions);
  }

  getProductById(idProduct: number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/search/'+idProduct,httpOptions);
  }

  newestProducts(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/newestProducts',httpOptions);
  }

  countProducts(token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/countProducts',httpOptions);
  }

}
