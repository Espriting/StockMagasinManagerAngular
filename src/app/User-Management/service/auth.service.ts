import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../model/User";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiURL: string = environment.url;
    token: string;
    public loggedUser: string;
    public isloggedIn: Boolean = false;
    public roles: string[];
    private helper = new JwtHelperService();

    constructor(private router: Router, private http: HttpClient) {
    }


    login(user: User) {
        return this.http.post<User>(this.apiURL + '/login', user,
            {observe: 'response'});

    }

    saveToken(access_token: string) {
        localStorage.setItem('access_token', access_token);
        this.token = access_token;
        this.isloggedIn = true;
        this.decodeJWT();
    }

    decodeJWT() {
        if (this.token == undefined)
            return;
        const decodedToken = this.helper.decodeToken(this.token);
        this.roles = decodedToken.roles;
        this.loggedUser = decodedToken.sub;
    }

    logout() {
        this.loggedUser = this.loggedUser;
        this.roles = this.roles;
        this.token = this.token;
        this.isloggedIn = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
    }

    isTokenExpired(): Boolean {
        return this.helper.isTokenExpired(this.token);
    }

    setLoggedUserFromLocalStorage(login: string) {
        this.loggedUser = login;
        this.isloggedIn = true;
        this.getUserRoles(login);
    }

    getUserRoles(login: string) {

    }

    generatetoken(nom:any, password:any){
        let body = new URLSearchParams();
        body.set('nom',nom);
        body.set('password',password);
        const httpOptions = {
            headers: new HttpHeaders({
                authorization: 'my-auth-token'
            })
        };
        console.log(body.toString())
        httpOptions.headers =httpOptions.headers.set('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:8118/StockMagasinManager/login',body.toString(),httpOptions);

    }
    isAdmin(): Boolean {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ROLE_SUPER_ADMIN') >= 0;
    }
    getToken() {
        return localStorage.getItem('access_token');
    }


}
