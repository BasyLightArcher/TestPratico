import { Component, OnInit } from '@angular/core';
import { Sweet } from 'src/app/classes/SweetsInterface';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService:ListService) { }

  ngOnInit() {
  }
  sweets:Sweet[] = this.listService.getList();
  btnStyle="fa fa-heart-o";
  addFavorite(item:Sweet){
    item.favorite=!item.favorite;
  }
  hideMenu(item:Sweet){
    item.showMenu=!item.showMenu;
  }
  hideItem(item:Sweet){
    item.hidden=!item.hidden;
  }
}