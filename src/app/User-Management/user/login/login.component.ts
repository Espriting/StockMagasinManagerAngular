import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tokenUser:string;
  user = new User();
  err: number = 0;
  token: any;
  log: boolean = false;

  constructor(private authService: AuthService,
              public router: Router) {
  }


  ngOnInit(): void {

    localStorage.clear();

  }

  onLoggedin(nom: any, password: any) {

    this.authService.generatetoken(nom, password).subscribe((data: any) => {
      this.token = data.access_token;
      console.log(JSON.stringify(this.token))
      this.tokenUser = "Bearer " + this.token;
      localStorage.setItem('tokenUser', this.tokenUser);
      const tokenU = localStorage.getItem('tokenUser')!;
      this.authService.saveToken(tokenU);
      this.router.navigate(['/users']);
    }, (err) => {
      this.err = 1;
    });
  }

}
