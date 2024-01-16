import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ParkCarComponent } from './park-car/park-car.component';
import { RegisterCarComponent } from './register-car/register-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'home', component: HomePageComponent, children: []},
  {path: 'park', component: ParkCarComponent},
  {path: 'vehicle', component: RegisterCarComponent},
  {path: '**', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
