import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingEnum } from './classes/RoutingEnum';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  {path: RoutingEnum.login, component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
