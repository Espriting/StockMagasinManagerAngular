import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-forget',
  templateUrl: './user-forget.component.html',
  styleUrls: ['./user-forget.component.css']
})
export class UserForgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();

  }

}
