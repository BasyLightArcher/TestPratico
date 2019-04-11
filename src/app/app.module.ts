import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './Component/list/list.component';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './Component/login/login.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
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
