import { Injectable } from '@angular/core';

import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate {
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(localStorage.getItem("user") && localStorage.getItem("psw")){
            return true;
        }
        return false;
    }
    canActivateChild(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(localStorage.getItem("user") && localStorage.getItem("psw")){
            return true;
        }
        return false;
    }

}