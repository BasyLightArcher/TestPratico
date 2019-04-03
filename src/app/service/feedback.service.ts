import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  private _nome: string = localStorage.getItem('nome');
  private _cognome:string = localStorage.getItem('cognome');
  private _genere:string = localStorage.getItem('genere');
  private _email:string = localStorage.getItem('email');
  private _telefono:string = localStorage.getItem('telefono');
  
  public get nome(): string {
    return this._nome;
  }
  public get cognome():string{
    return this._cognome;
  }

  public get genere():string{
    return this._genere;
  }
  public get email():string{
    return this._email;
  }
  public get telefono():string{
    return this._telefono;
  }
}
