import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user =  new User();

  }
  save(){
    //traitement

  }

}
