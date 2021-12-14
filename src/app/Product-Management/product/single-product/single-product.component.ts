import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/Product-Management/service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: Product;
  @Output() deleteNotifEvent = new EventEmitter<Product>();
  @Output() updateNotifEvent = new EventEmitter<Product>();

  token: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenUser')!;
   // this.productService.newestProducts(this.token).subscribe((data: any) => {
     // for (let i = 0; i < data.length; i++) {
     //   if (this.product.idProduit = data.value) {
     //     console.log(data)
     //     console.log(this.product.idProduit)
     //   } else {
     //     console.log("bbbb")
    //    }
     // }
   // });
   console.log(this.product.dateCreation)
  }

  deleteNotif() {
    this.deleteNotifEvent.emit(this.product)
  }
  updateNotif() {
    this.updateNotifEvent.emit(this.product)
  }



}
