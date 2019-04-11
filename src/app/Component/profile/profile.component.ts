import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
// private editshow: boolean;
<<<<<<< HEAD
 name: String;
 surname: String;
 email: String;
 number: String;
 sesso: String;
  constructor() { 
    this.getprofile();
  }
=======
private name: String;
private surname: String;
private mail: String;
private number: string;
private sex:string;
  constructor() {
    this.name=sessionStorage.getItem("nome");
    this.surname=sessionStorage.getItem("cognome");
    this.mail=sessionStorage.getItem("email");
    this.number=sessionStorage.getItem("numero");
    this.sex=sessionStorage.getItem("sesso");
   }
>>>>>>> 5c6f17c7dc96b963d5925a8a187c5d59e9d304e4

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
