import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  title = 'TestPratico';
  constructor(private elementRef:ElementRef){}
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'linear-gradient(180deg, #00357F, #00357F, 100%)';
  }
}
