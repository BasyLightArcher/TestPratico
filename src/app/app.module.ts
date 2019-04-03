import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Component/menu/menu.component';
import { ListComponent } from './Component/list/list.component';

import { HomepageComponent } from './Component/homepage/homepage.component';
import { LoginComponent } from './Component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
