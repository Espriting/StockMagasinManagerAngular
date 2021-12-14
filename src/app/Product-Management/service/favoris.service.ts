import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favoris } from '../../model/favoris';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private baseUrl=environment.url+"favoris";

  constructor(private HttpClient : HttpClient) { }

  getFavList(idUser:number,token:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
    return this.HttpClient.get<Product[]>(this.baseUrl+'/display/'+idUser,httpOptions);
  }

  addFavoris(favoris:Favoris,idProduct: number,idUser: number,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
    return this.HttpClient.post<Favoris>(this.baseUrl+'/add/'+idProduct+'/'+idUser,favoris,httpOptions);
  }

  deleteFavoris(idFavoris: number,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
    return this.HttpClient.delete(this.baseUrl+'/delete/'+idFavoris,httpOptions);
  }

  findFav(idProduct: number,idUser: number,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
    return this.HttpClient.get(this.baseUrl+'/findFav/'+idProduct+"/"+idUser,httpOptions);
  }

}