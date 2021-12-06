import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {User} from "../../model/User";
import {AuthService} from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseURL = environment.url+"api/user";
    public token="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBcm5vbGQiLCJyb2xlcyI6WyJST0xFX1NVUEVSX0FETUlOIl0sImlzcyI6Ii9TdG9ja01hZ2FzaW5NYW5hZ2VyL2xvZ2luIiwiZXhwIjoxNjM4ODAxNTE2fQ.NlUOkABjphbwFCui6LpZis__DxWZdsu0OjNOIUYPmXE";
    constructor(private HttpClient: HttpClient) {

    }


    getUsersList(): Observable<any>{
        const headers=new HttpHeaders().set("Authorization",this.token);
        return this.HttpClient.get(this.baseURL+ '/users',{headers});
    }
    addUser(user: User) {
        const headers=new HttpHeaders().set("Authorization",this.token);
        return this.HttpClient.post(this.baseURL + '/users/save', user,{headers});
    }

    updateUser(id: number, user: User) {

        return this.HttpClient.put(this.baseURL + '/updateUser/${id}', user);
    }

    deleteUser(id: number) {
        const headers=new HttpHeaders().set("Authorization",this.token);
        return this.HttpClient.get(this.baseURL + '/deletUser/'+ id,{headers});
    }

    getUserById(id: number) {
        return this.HttpClient.get(this.baseURL + '/getUserById/${id}' + id);
    }

    login(user: User) {
        this.getUserById(user.id);
        return this.HttpClient.post(this.baseURL + '/login', user);
    }

    register(user: User) {
        return this.HttpClient.put(this.baseURL + '/registerUser', user);
    }
    GetuserByEmailAndPassword(email: string , password:string){

    }
}
