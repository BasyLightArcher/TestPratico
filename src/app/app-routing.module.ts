import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingEnum } from './classes/RoutingEnum';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import{ListComponent} from './Component/list/list.component';

const routes: Routes[] = [
  {path: RoutingEnum.login, component: LoginComponent},
  {path: RoutingEnum.register, component: RegisterComponent},
  {path: RoutingEnum.home, component: HomepageComponent},
  {path: '', redirectTo: RoutingEnum.login, pathMatch: 'full'},
  {path: RoutingEnum.list, component: ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }