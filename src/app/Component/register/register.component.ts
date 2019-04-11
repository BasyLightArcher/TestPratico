import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    nome: new FormControl(),
    cognome: new FormControl(),
    numero: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  doRegister()
  {
    sessionStorage.setItem('nome',this.registerForm.get('nome').value);
    sessionStorage.setItem('cognome',this.registerForm.get('cognome').value);
    sessionStorage.setItem('numero',this.registerForm.get('numero').value);
    sessionStorage.setItem('email',this.registerForm.get('email').value);
    sessionStorage.setItem('password',this.registerForm.get('password').value);
    localStorage.setItem('user', this.registerForm.get('email').value);
    localStorage.setItem('psw', this.registerForm.get('password').value);
    this.registerService.registerDone();
  }
}
