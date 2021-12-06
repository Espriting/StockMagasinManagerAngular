import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {roles} from "../../../model/roles";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  newUser = new User();
  newrole = new roles();
  constructor(public authService: AuthService, private userService: UserService,public router: Router) {
  }

  ngOnInit(): void {
    localStorage.getItem('access_token');

  }

  save() {
    this.userService.addUser(this.newUser).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['/products']);

    });
    this.userService.getUsersList();
  }
}
