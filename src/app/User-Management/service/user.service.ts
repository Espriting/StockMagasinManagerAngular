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
    public tokenUser=localStorage.getItem('tokenUser');
    public token=this.tokenUser!;
    constructor(private HttpClient: HttpClient) {

    }


    getUsersList(): Observable<any>{
        const headers=new HttpHeaders().set("Authorization",this.token);
        console.log(this.token)
        return this.HttpClient.get(this.baseURL+ '/users',{headers});
    }
    addUser(user: User) {
        return this.HttpClient.post(this.baseURL + '/registerUser', user);
    }

    updateUser(id: number, user: User) {
        return this.HttpClient.put(this.baseURL + '/updateUser/${id}', user);
    }

    deleteUser(id: number) {
        return this.HttpClient.delete(this.baseURL + '/deletUser/${id}' + id);
    }

    getUserById(id: number) {
        return this.HttpClient.get(this.baseURL + '/getUserById/${id}' + id);
    }

    login(user: User) {
        return this.HttpClient.post(this.baseURL + '/login', user);
    }

    register(user: User) {
        return this.HttpClient.put(this.baseURL + '/registerUser', user);
    }
    GetuserByEmailAndPassword(email: string , password:string){

    }
}
