import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
// private editshow: boolean;
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

  ngOnInit() {
    
  }
  edit(){}
}
