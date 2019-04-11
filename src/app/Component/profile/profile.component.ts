import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
// private editshow: boolean;
private name: String;
private surname: String;
private email: String;
private age: number;
  constructor() { }

  ngOnInit() {
  }
  edit(){}
}
