import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/Product-Management/service/product.service';
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

  tokenUser:any;
  token: string;

  countProducts:number;

  page = 1;
  count = 0;
  tableSize = 4;
  tableSizes = [3, 6, 9, 12];

  constructor(private productService: ProductService) {
   
    
   }

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenUser')!;
    console.log(this.token)

    this.getProducts();
    this.inputProduct = new Product();


    this.productService.countProducts(this.token).subscribe((data:any)=>{
      this.countProducts=data;
    })
    
    
  }

  getProducts() {
    this.productService.getProductsList(this.token).subscribe(
      data => {
        this.products = data;
      }
    );
    console.log(this.token)
    //localStorage.clear();
  }

 



  save(product: Product): void {

    /*let i = this.products.indexOf(product);

    if (i != -1) {
      //this.getProducts();
      this.productService.updateProduct(product,this.token).subscribe(() => this.products[i] = product);
      swal("success!", "Product updated!", "success");

    }
    else {*/
      //this.getProducts();
      this.productService.addProduct(product,this.token).subscribe(() => {
        this.products.push(product)
        this.productService.countProducts(this.token).subscribe((data:any)=>{
          this.countProducts=data;
        })
        swal("success!", "Product added!", "success");
      });
      
      

    //}
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
          this.productService.deleteProduct(product.idProduit,this.token).subscribe(data => {
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



  onTableDataChange(event:any){
    this.page = event;
    this.getProducts();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProducts();
  }  
}
