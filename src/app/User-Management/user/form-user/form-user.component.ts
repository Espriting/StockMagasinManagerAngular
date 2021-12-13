import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/User";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {Role} from "../../../model/Role";
import {Router} from "@angular/router";
import {DatePipe, formatDate} from '@angular/common';

import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  providers: [DatePipe]

})
export class FormUserComponent implements OnInit {
  registrationForm: FormGroup;
  user = new User();
  newrole = new Role();
  isRegistered = false;
  submitted = false;
  currentDate = new Date();
  errorMessage = '';
  constructor(public authService: AuthService, private userService: UserService,public router: Router,private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    localStorage.getItem('access_token');
    this.registrationForm = new FormGroup({
      nom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateNaissance: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),


    });


  }
    onSubmit(){
      this.submitted = true;
      this.user.nom = this.registrationForm.value.nom;
      this.user.prenom = this.registrationForm.value.prenom;
      this.user.email = this.registrationForm.value.email;
      this.user.password = this.registrationForm.value.password;
      this.user.dateNaissance = this.registrationForm.value.dateNaissance;
      this.registerUser()
    }
    registerUser(){
      this.userService.addUser(this.user)
          .subscribe(user=> {
            console.log(user);
            this.isRegistered = true;
            this.router.navigate(['/produit']);
          }, error=> {
            console.log(error);
            this.errorMessage = error;
            this.isRegistered = false;
          });
    }




}
