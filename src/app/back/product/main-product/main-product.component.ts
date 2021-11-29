import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import swal from 'sweetalert';

//import swal from 'sweetalert';


@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

  products: Product[];
  inputProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.inputProduct = new Product();
  }

  getProducts() {
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
      }
    );

  }



  save(product: Product): void {

    let i = this.products.indexOf(product);

    if (i != -1) {
      //this.getProducts();
      this.productService.updateProduct(product).subscribe(() => this.products[i] = product);
      swal("success!", "Product updated!", "success");

    }
    else {
      //this.getProducts();
      this.productService.addProduct(product).subscribe(() => this.products.push(product));
      swal("success!", "Product added!", "success");

    }
  }

  showForm() {

    this.inputProduct = new Product();

  }

  update(product: Product): void {
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduct = product;

  }

  delete(product: Product): void {
    //this.getProducts();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i = this.products.indexOf(product);
          this.productService.deleteProduct(product.idProduit).subscribe(data => {
            this.products.splice(i, 1)
          });
          swal("Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Product  is safe!");
        }
      });

  }

}
