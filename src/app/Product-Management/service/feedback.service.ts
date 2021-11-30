import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Feedback } from '../../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL=environment.url+"feedback";
  constructor(private HttpClient: HttpClient) { }

  getLikes(idProduct: number){
    return this.HttpClient.get(this.baseURL+'/nbrLike/'+idProduct);
  }

  getDislikes(idProduct: number){
    return this.HttpClient.get(this.baseURL+'/nbrDislike/'+idProduct);
  }

  getAllComments(idProduct: number){
    return this.HttpClient.get(this.baseURL+'/comments/'+idProduct);
  }

  addComment(feedback: Feedback,idProduct: number,idUser: number){
    return this.HttpClient.post(this.baseURL+'/addComment/'+idProduct+'/'+idUser,feedback);
  }

  addReaction(feedback: Feedback,idProduct: number,idUser: number){
    return this.HttpClient.post(this.baseURL+'/addReaction/'+idProduct+'/'+idUser,feedback);
  }

  deleteComment(idFeedback:number){
    return this.HttpClient.delete(this.baseURL+'/delete/'+idFeedback);
  }

  updateComment(feedback:Feedback,idFeedback:number){
    return this.HttpClient.put(this.baseURL+'/updateComment/'+idFeedback,feedback);
  }
}
