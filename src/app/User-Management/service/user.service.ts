import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from "../../model/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseURL=environment.url+"user";
    constructor(private HttpClient: HttpClient) { }

    getUsersList(): Observable<any>{
        return this.HttpClient.get(this.baseURL+'/users');
    }

    addUser(user: User){
        return this.HttpClient.post(this.baseURL+'/registerUser',user);
    }

    updateUser(id: number,user: User){
        return this.HttpClient.put(this.baseURL+'/updateUser/${id}',user);
    }

    deleteUser(id: number){
        return this.HttpClient.delete(this.baseURL+'/deletUser/${id}'+id);
    }

    getUserById(id: number){
        return this.HttpClient.get(this.baseURL+'/getUserById/${id}'+id);
    }
    login(user: User){
        return this.HttpClient.post(this.baseURL+'/login',user);
    }
    register(user: User){
        return this.HttpClient.put(this.baseURL+'/registerUser',user);
    }
}
