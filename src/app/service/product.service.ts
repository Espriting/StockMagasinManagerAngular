import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL=environment.url+"produit";
  constructor(private HttpClient: HttpClient) { }

  getProductsList(): Observable<any>{
    return this.HttpClient.get(this.baseURL+'/display');
  }

  addProduct(product: Product){
    return this.HttpClient.post(this.baseURL+'/add',product);
  }

  updateProduct(product: Product){
    return this.HttpClient.put(this.baseURL+'/update',product);
  }

  deleteProduct(idProduct: number){
    return this.HttpClient.delete(this.baseURL+'/delete/'+idProduct);
  }

  getProductById(idProduct: number){
    return this.HttpClient.get(this.baseURL+'/retreive/'+idProduct);
  }

}
