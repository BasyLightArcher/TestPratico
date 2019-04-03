import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomepageComponent } from './component/homepage/homepage.component';
import { MenuComponent } from './component/menu/menu.component';
=======
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
>>>>>>> login

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
<<<<<<< HEAD
    MenuComponent
=======
    LoginComponent
>>>>>>> login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
