import { Injectable } from '@angular/core';
import {Sweet} from 'src/app/classes/SweetsInterface';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  sweets:Sweet[] = [
    {id:1,name:'Torta alle mele',tipologia:'Torta',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:2,name:'Cheesecake alla fragola',tipologia:'Torta',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:3,name:'Creme caramel',tipologia:'Al cucchiaio',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:4,name:'Cannoli siciliani',tipologia:'Piccola pasticceria',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:5,name:'Gelato alla vaniglia',tipologia:'Classici',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:6,name:'Torta della nonna',tipologia:'Torta',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:7,name:'Gelato al cioccolato',tipologia:'Classici',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:8,name:'Crèpe alla nutella',tipologia:'Salati',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:9,name:'Babà',tipologia:'Piccola pasticceria',descrizione:'',favorite:false,showMenu:false,hidden:false},
    {id:10,name:'Torta margherita allo yogurt',tipologia:'Torta',descrizione:'',favorite:false,showMenu:false,hidden:false}
  ];
  constructor() { }

  getList():Sweet[] {
    return this.sweets;
  }
}