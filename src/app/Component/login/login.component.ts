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

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
   }

  ngOnInit() {
  }

  public login() {
    if(this.loginForm.get('username').value >= 4 && this.loginForm.get('password').value >= 4) {
      sessionStorage.setItem('username', this.loginForm.get('username').value);
      sessionStorage.setItem('password', this.loginForm.get('password').value);
    }
    return this.loginService.getLogIn();
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      alert('Ciao, NON hai fatto il login');
      return;
    }
    else{
      alert('ciao, hai fatto il login');
      this.login();
      this.router.navigate(['/' + RoutingEnum.home]);
    }
  }

  reset(): void{
    this.loginForm.reset();
  }

}
