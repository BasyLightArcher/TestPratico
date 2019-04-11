import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './Component/list/list.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './Component/login/login.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './RouteGuard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    MenuComponent,
    ListComponent,
    LoginComponent,
    FeedbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
