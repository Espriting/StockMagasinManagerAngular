import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { observable } from 'rxjs';
import { Favoris } from 'src/app/model/favoris';
import { Product } from 'src/app/model/product';
import { FavorisService } from '../service/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  listFavoris: any[];
  product: Product;
  products: Product[];
  favoris: Favoris = new Favoris();

  token:any;

  constructor(private favorisService: FavorisService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenUser')!;
    console.log(this.token)

    this.products=[];
    this.getFavoris();
  }

  getFavoris() {
 
      this.favorisService.getFavList(2,this.token).subscribe(
        (data: any) => {
            for (let i = 0; i <data.length; i++) {
          this.product = new Product();
          this.listFavoris = data;
          this.product.libelle = data[i][4];
          this.product.categorieProduit = data[i][2];
          this.product.code = data[i][3];
          this.product.prixUnitaire = data[i][5];
          this.product.picture = data[i][6];
         // this.product.dateCreation = data[i][7];
          this.product.idProduit = data[i][1];
          this.products.push(this.product);
            }
        }
      );
    
  }

  deleteFavoris(favoris: Favoris , product:Product){
    let i = this.products.indexOf(product);
   // console.log(this.listFavoris[i][0])
    console.log(i)
    console.log(product)
      favoris.idFavoris=this.listFavoris[i][0];
      this.favorisService.deleteFavoris(favoris.idFavoris,this.token).subscribe(data => {
      this.listFavoris.splice(i, 1);
      this.products.splice(i,1);
      });
  }

}