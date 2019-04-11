import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingEnum } from './classes/RoutingEnum';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './Component/list/list.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { AuthGuard } from './RouteGuard';

const routes: Routes = [
  // {path: RoutingEnum.login, component: LoginComponent},
  // {path: RoutingEnum.register, component: RegisterComponent},
 

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {
    path: 'portal',
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],

    children: [
      { path: 'home', component: HomepageComponent },

      { path: 'list', component: ListComponent },

      { path: 'feedback', component: FeedbackComponent },

       { path: 'profile', component: ProfileComponent},

    ]
  },
   {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }