import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {User} from "../../../model/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tokenUser:string;
  user = new User();
  submitted = false;
  loginForm: FormGroup;
  isLoggedin = false;
  isLoginFailed = false;
  errorMessage = '';
  err: number = 0;
  token: any;
  log: boolean = false;
  nom: string;
  constructor(private authService: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
    localStorage.getItem('access_token');
    this.nom = sessionStorage.getItem("nom");
    this.loginForm = new FormGroup({
      nom: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),    });
  }
  onSubmit(){
    this.submitted = true;
    this.user.nom = this.loginForm.value.nom;
    this.user.password = this.loginForm.value.password;
    this.onLoggedin(this.user.nom,this.user.password);

  }
  onLoggedin(nom: any, password: any) {

    this.authService.generatetoken(nom, password).subscribe((data: any) => {
      this.isLoggedin = true
      this.token = data.access_token;
      console.log(JSON.stringify(this.token))
      this.tokenUser = "Bearer " + this.token;
      localStorage.setItem('tokenUser', this.tokenUser);
      const tokenU = localStorage.getItem('tokenUser')!;
      this.authService.saveToken(tokenU);
      this.router.navigate(['/users']);
    }, error=>{
          console.log(error);
          this.errorMessage = error;
          this.isLoggedin = false;
          this.isLoginFailed = true;
        }
    );
  }

}
