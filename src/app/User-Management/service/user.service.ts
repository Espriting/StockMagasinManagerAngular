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

    private baseURL = environment.url;

    constructor(private HttpClient: HttpClient, private authService: AuthService) {
    }


    getUsersList(): Observable<any>{
        return this.HttpClient.get(this.baseURL+'api/user/users');
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
}
