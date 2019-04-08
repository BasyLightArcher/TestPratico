import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/classes/RoutingEnum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    alert("Ciao, stai avviando la funzione logout, e torni al LOGIN")
    this.router.navigate(['/' + RoutingEnum.login]);
  }

}
