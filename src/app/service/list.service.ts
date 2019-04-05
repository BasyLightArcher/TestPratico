import { Injectable } from '@angular/core';
import {Sweet} from 'src/app/classes/SweetsInterface';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  sweets:Sweet[] = [
    {id:1,name:'Torta alle mele',tipologia:'Torta',descrizione:'torta alle mele'},
    {id:2,name:'Cheesecake alla fragola',tipologia:'Torta',descrizione:''},
    {id:3,name:'Creme caramel',tipologia:'Al cucchiaio',descrizione:''},
    {id:4,name:'Cannoli siciliani',tipologia:'Piccola pasticceria',descrizione:''},
    {id:5,name:'Gelato alla vaniglia',tipologia:'Classici',descrizione:''},
    {id:6,name:'Torta della nonna',tipologia:'Torta',descrizione:''},
    {id:7,name:'Gelato al cioccolato',tipologia:'Classici',descrizione:''},
    {id:8,name:'Crèpe alla nutella',tipologia:'Salati',descrizione:''},
    {id:9,name:'Babà',tipologia:'Piccola pasticceria',descrizione:''},
    {id:10,name:'Torta margherita allo yogurt',tipologia:'Torta',descrizione:'versione light della torta margherita'}
  ];
  constructor() { }

  getList():Sweet[] {
    return this.sweets;
  }

}