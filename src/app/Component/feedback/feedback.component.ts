import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit {
  nome:string='';
  cognome:string='';
  genere:string='';
  telefono:string='';
  email:string='';
  commento:string='';

  constructor() { }

  ngOnInit() {
  }

}
