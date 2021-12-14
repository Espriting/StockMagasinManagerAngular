import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert';
import { Token } from "@angular/compiler";
import { AuthService } from "../../service/auth.service";
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  err: number = 0;
  token: any;
  log: boolean = false;

  showMenu:Boolean = false;

  @Output() showMenuNotif = new EventEmitter();

  tokenUser: string;
  constructor(private authService: AuthService,
    public router: Router) {
  }


  ngOnInit(): void {

    localStorage.clear();

  }


  showMenuNotification(showMenu:Boolean) {
    this.showMenuNotif.emit();
    //this.showMenu=true;
  }


  onLoggedin(nom: any, password: any) {

    this.authService.generatetoken(nom, password).subscribe((data: any) => {

      this.token = data.access_token;
      console.log(JSON.stringify(this.token))
      this.tokenUser = "Bearer " + this.token;
      localStorage.setItem('tokenUser', this.tokenUser);
      localStorage.setItem('isloggedIn', ""+true);
      const tokenU = localStorage.getItem('tokenUser')!;
      this.authService.saveToken(tokenU);
     // this.router.navigate([this.router.url])
      location.assign("/products");
      //window.location.reload();
      this.router.navigate(['/products']);
    }, (err) => {
      this.err = 1;
    });

    this.showMenuNotification(this.showMenu);
    
  }

}
