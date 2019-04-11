import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/classes/RoutingEnum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  private username: String;
  user_id: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    alert("Ciao, stai tornando al LOGIN")
    this.router.navigate(['/' + RoutingEnum.login]);
  }

}
