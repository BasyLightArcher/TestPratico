import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private router: Router) 
  { }
  
  registerDone()
  {
    this.router.navigateByUrl('/login');
  }

}
