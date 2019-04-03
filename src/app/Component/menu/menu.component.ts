import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  private username: String;
  user_id: String;
  constructor(private loginService: LogInService) {
    this.getusername();
    this.loginService.account$.subscribe(value => {
      this.getusername();

    })
  }

  getusername() {
    this.user_id = localStorage.getItem('user');
  }
  ngOnInit() {
  }

  logout() {
    this.loginService.logOutDone();
  }
}
