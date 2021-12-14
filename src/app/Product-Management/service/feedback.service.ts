import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Feedback } from '../../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL=environment.url+"feedback";
  constructor(private HttpClient: HttpClient) { }



  getLikes(idProduct: number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/nbrLike/'+idProduct,httpOptions);
  }

  getDislikes(idProduct: number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/nbrDislike/'+idProduct,httpOptions);
  }

  getAllComments(idProduct: number,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.get(this.baseURL+'/comments/'+idProduct,httpOptions);
  }

  addComment(feedback: Feedback,idProduct: number,idUser: number,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.post(this.baseURL+'/addComment/'+idProduct+'/'+idUser,feedback,httpOptions);
  }

  addReaction(feedback: Feedback,idProduct: number,idUser: number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.post(this.baseURL+'/addReaction/'+idProduct+'/'+idUser,feedback,httpOptions);
  }

  deleteComment(idFeedback:number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.delete(this.baseURL+'/delete/'+idFeedback,httpOptions);
  }

  updateComment(feedback:Feedback,idFeedback:number,token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'my-auth-token'
      })
    };
    httpOptions.headers =httpOptions.headers.set('authorization', token);
 
    return this.HttpClient.put(this.baseURL+'/updateComment/'+idFeedback,feedback,httpOptions);
  }
}
