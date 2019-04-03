import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Component/menu/menu.component';
import { ListComponent } from './Component/list/list.component';
import {FormsModule} from '@angular/forms'
import { HomepageComponent } from './Component/homepage/homepage.component';
import { LoginComponent } from './Component/login/login.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    ListComponent,
    LoginComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
