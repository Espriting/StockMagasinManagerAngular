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
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteNotif() {
    this.deleteNotifEvent.emit(this.product)
  }
  updateNotif() {
    this.updateNotifEvent.emit(this.product)
  }
  

  
}
