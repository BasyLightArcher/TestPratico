import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private username: String;
  user_id: String;

  constructor(private loginService: LoginService) {
    this.getusername();
    this.loginService.account$.subscribe(value => {
      this.getusername();
    })
   }

   getusername() {
    this.user_id = sessionStorage.getItem('user');
  }
  ngOnInit() {
  }

  logout() {
    this.loginService.logOutDone();
  }
}
