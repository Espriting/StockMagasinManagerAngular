import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {Feedback} from "../../../model/feedback";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  users: User[];
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
    localStorage.getItem('access_token');

  }
  updateUser(user:User){

    let i = this.users.indexOf(user);
    console.log(i)
    localStorage.setItem('index', ""+i);
    console.log(user)
    localStorage.setItem('id', ""+user.id);

  }
}
