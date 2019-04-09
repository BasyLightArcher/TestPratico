import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class RootService implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  canActivate(){
    if(!(sessionStorage.getItem('username') && sessionStorage.getItem('password'))){
      return true;
    }
    else{
      alert("devi fare il login");
      return false;
    }
  }

  

  constructor() { }
}
