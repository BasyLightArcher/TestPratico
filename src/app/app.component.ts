import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { LoginService } from './service/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  private loginActive: boolean;
  private registerActive: boolean;

  title = 'TestPratico';

  constructor(private elementRef:ElementRef,private loginService: LoginService){
    this.loginActive = this.loginService.getLogIn();
    this.loginService.account$.subscribe(value=>{
      this.loginActive = value;
    });

  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(180deg, #00357F, #00357F, 100%)';
  }
}
