import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/classes/RoutingEnum';
import { MenuItem } from 'src/app/classes/menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'home', selezionato: false, endpoint: '/' + RoutingEnum.home},
    {id: 2, descrizione: 'lista', selezionato: false, endpoint: '/' + RoutingEnum.list},
    {id: 3, descrizione: 'cards', selezionato: false, endpoint: '/' + RoutingEnum.cards},
    {id: 4, descrizione: 'feedback', selezionato: false, endpoint: '/' + RoutingEnum.feedback},
    {id: 5, descrizione: 'profile', selezionato: false, endpoint: '/' + RoutingEnum.profile},
    {id: 6, descrizione: 'detail', selezionato: false, endpoint: '/' + RoutingEnum.detail}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/' + RoutingEnum.login]);
  }

}
