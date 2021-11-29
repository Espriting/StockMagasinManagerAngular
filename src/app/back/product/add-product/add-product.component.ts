import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  fileToUpload: string | undefined;
  userFile: string ;

  terms: Boolean = false;
  @Input() product: Product;
  @Output() addEvent = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    
  }

  onSelectFile(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var img = event.target.files[0].name;
      console.log(img);
      this.product.picture=img;
    }
  }

  save() {
    this.addEvent.emit(this.product);
    this.product = new Product();
  }

  change() {
    if (this.terms == false) {
      this.terms = true;
    } else
      this.terms = false;
    console.log(this.terms);
  }
  

}
