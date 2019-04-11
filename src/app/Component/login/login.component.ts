import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/classes/RoutingEnum';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  submitted = false;
  admin: String;
  password: String;
  

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
    this.admin="admin";
    this.password="admin";
   }

  ngOnInit() {
  }

   checkid() {
    if((this.loginForm.get('username').value == localStorage.getItem('user') &&
       this.loginForm.get('password').value == localStorage.getItem('psw'))||
       (this.loginForm.get('username').value== this.admin && 
       this.loginForm.get('password').value== this.password)){
        localStorage.setItem('user', this.loginForm.get('username').value);
        localStorage.setItem('psw', this.loginForm.get('password').value);
      return this.doLogin();
    }
    else { return false; }
  }
  getusername() {
    return localStorage.getItem('user');
  }
  doLogin() {
    this.loginService.logInDone();
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      alert('Ciao, NON hai fatto il login');
      return;
    }
    else{
      alert('ciao, hai fatto il login');
      this.checkid();
    }
  }

  reset(): void{
    this.loginForm.reset();
  }

}
