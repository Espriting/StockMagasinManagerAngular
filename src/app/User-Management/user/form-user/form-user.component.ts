import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  newUser = new User();

  constructor(public authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    localStorage.getItem('access_token');

  }

  save() {
    this.userService.addUser(this.newUser).subscribe(prod => {
      console.log(prod);

    });
  }
  }
