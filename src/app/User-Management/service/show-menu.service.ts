import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowMenuService {

  local: any;
  constructor() { }

  showMenu(): Boolean{
    this.local = localStorage.getItem('isloggedIn');
    console.log(this.local)
    return this.local;
  }
}
