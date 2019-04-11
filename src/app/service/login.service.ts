import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private account: BehaviorSubject<boolean> = new BehaviorSubject(!!localStorage.getItem('user'));
  public account$ = this.account.asObservable();
  
  constructor(private router: Router) { }

  logInDone() {
    this.account.next(true);
    this.router.navigateByUrl('/portal/home');
  }
  logOutDone() {
    this.account.next(false);
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }
  public getLogIn()
  {
    return this.account.getValue();
  }
}
