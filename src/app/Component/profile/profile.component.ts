import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
// private editshow: boolean;
 name: String;
 surname: String;
 email: String;
 number: String;
 sesso: String;
  constructor() { 
    this.getprofile();
  }

  ngOnInit() {
  }
  edit(){}
  getprofile() {
    this.name=sessionStorage.getItem('nome');
    this.surname=sessionStorage.getItem('cognome');
    this.email=sessionStorage.getItem('email');
    this.number=sessionStorage.getItem('numero');
    this.sesso="Maschio";
  }
}
