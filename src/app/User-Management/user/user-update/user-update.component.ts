import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  currentUser = new User();

  constructor(public authService: AuthService,
              private userService: UserService,
              private router :Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    localStorage.getItem('access_token');
    this.userService.getUserById(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{
      if (prod instanceof User) {
        this.currentUser = prod;
      } });

  }

  updateUser() {

  }

  }

