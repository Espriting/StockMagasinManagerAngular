import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Favoris } from 'src/app/model/favoris';
import { Feedback } from 'src/app/model/feedback';
import { Product } from 'src/app/model/product';
import { FeedbackService } from 'src/app/Product-Management/service/feedback.service';
import { ProductService } from 'src/app/Product-Management/service/product.service';
import { FavorisService } from '../../service/favoris.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  feedbacks: Feedback[];
  feedback: Feedback = new Feedback();
  product: Product;
  idProduct: number;
  likes: number;
  dislikes: number;
  myForm: FormGroup;

  favoris: Favoris = new Favoris();

  token:any;

  showFav:Boolean=false;

  disabledFav:Boolean=false;


  constructor(private productService: ProductService,private feedbackService: FeedbackService,
     private route: ActivatedRoute,private favorisService: FavorisService,private _router:Router) {
  }

  ngOnInit(): void {
    

    this.token = localStorage.getItem('tokenUser')!;
    console.log(this.token)

    

    this.myForm = new FormGroup({
      'commentaire': new FormControl('')
    });


    this.route.paramMap.subscribe((params) => {
      this.idProduct = JSON.parse(params.get('id')!)
      
    });
    this.getProduct(this.idProduct);

    this.countDislikes(this.idProduct);
    this.countLikes(this.idProduct);
    this.getAllComments(this.idProduct);


    console.log(this.likes);
    console.log(this.product);


    this.favorisService.findFav(this.idProduct,2,this.token).subscribe((data:any)=>{
      console.log(data)
      if(data!=null){
        this.disabledFav=true;
      }
      console.log(this.disabledFav)
    });

  }
  getProduct(idProduct: number) {
    this.productService.getProductById(this.idProduct,this.token).subscribe((data: any) => {
      console.log(data);
      this.product = data
    }
    );
  }

  countLikes(idProduct: number){
    this.feedbackService.getLikes(this.idProduct,this.token).subscribe((data: any) => {
      console.log(data);
      this.likes = data
    }
    );
  }

  countDislikes(idProduct: number){
    this.feedbackService.getDislikes(this.idProduct,this.token).subscribe((data: any) => {
      this.dislikes = data
    }
    );
  }

  getAllComments(idProduct: number){
    
    this.feedbackService.getAllComments(this.idProduct,this.token).subscribe((data: any) => {
      this.feedbacks = data
    }
    );
  
  }

  saveComment(feedback:Feedback){
    let i = JSON.parse(localStorage.getItem('index')!);
    let id = JSON.parse(localStorage.getItem('id')!);
    console.log(i)
    if(localStorage.getItem('index')?.length){
      this.feedback.commentaire=this.myForm.value.commentaire;
      this.feedbackService.updateComment(feedback,id,this.token).subscribe((data: any) => {
        this.feedbacks[i] = data
        console.log(i)
      });
      localStorage.removeItem('id');
      localStorage.removeItem('index');
    }
    else{
    this.feedback.commentaire=this.myForm.value.commentaire;
    this.feedbackService.addComment(this.feedback,this.idProduct,2,this.token).subscribe((data: any) => {
      this.feedbacks.push(data)
    });
    
  }
  this.myForm.reset();
  }

  addLike(){
    this.feedback.reaction="Like";
    console.log(this.token)
    this.feedbackService.addReaction(this.feedback,this.idProduct,2,this.token).subscribe((data: any) => {
      this.likes++;
    });
    
  }
  addDislike(){
    this.feedback.reaction="Dislike";
    this.feedbackService.addReaction(this.feedback,this.idProduct,2,this.token).subscribe((data: any) => {
      this.dislikes++;
    });
    
  }

  deleteComment(feedback:Feedback){
    let i = this.feedbacks.indexOf(feedback);
    this.feedbackService.deleteComment(feedback.idFeedback,this.token).subscribe((data: any) => {
      this.feedbacks.splice(i, 1)
      console.log(i)
    });
  }

  editComment(feedback:Feedback){
    
    this.myForm.setValue({
      'commentaire': feedback.commentaire
    });
    let i = this.feedbacks.indexOf(feedback);
    console.log(i)
    localStorage.setItem('index', ""+i);
    console.log(feedback)
    localStorage.setItem('id', ""+feedback.idFeedback);

    
  }



  addToFavoris(favoris:Favoris){
    this.favorisService.addFavoris(favoris, this.idProduct, 2,this.token).subscribe(()=>{
      this._router.navigate(['/favoris']);
      console.log(favoris)
    });
    

  }

}
