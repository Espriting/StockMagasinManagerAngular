import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert';
import {Token} from "@angular/compiler";
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  err: number = 0;
  token: any;
  log : boolean = false;
  constructor(private authService: AuthService,
              public router: Router) {
  }


  ngOnInit(): void {
    localStorage.clear();
  }
  onLoggedin(nom: any , password : any){

    this.authService.generatetoken(nom,password).subscribe((data:any)=>{

      this.token=data.access_token;
      console.log(JSON.stringify(this.token))
      localStorage.setItem('tokenUser', JSON.stringify(this.token));
      const tokenU = localStorage.getItem('tokenUser')!;
      this.authService.saveToken(tokenU);
      this.router.navigate(['/']);
    }, (err) => {
      this.err = 1;
    });
  }

}
