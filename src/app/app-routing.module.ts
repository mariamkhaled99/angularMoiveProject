import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MoivesComponent } from './moives/moives.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { NetworksComponent } from './networks/networks.component';
import { LogOutComponent } from './log-out/log-out.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import{LogInComponent}from './log-in/log-in.component'
import{RegisterComponent}from './register/register.component'
import{RouttingGuardGuard}from './routting-guard.guard'

const routes: Routes = [
  {path:'', redirectTo:"Register" ,pathMatch:"full"} ,
  {path:'Home',component: HomeComponent} ,
 {path:'Navbar', component:NavbarComponent} ,
 {path:'Register', component:RegisterComponent} ,
 {path:'LogIn', component:LogInComponent} ,
 {path:'About', canActivate:[RouttingGuardGuard],component:AboutComponent} ,
 {path:'Moives',canActivate:[RouttingGuardGuard], component: MoivesComponent} ,
 {path:'TvShow', component: TvShowComponent} ,
 {path:'Networks',canActivate:[RouttingGuardGuard], component: NetworksComponent} ,
 {path:'LogOut', component: LogOutComponent} ,
 {path:'People', component: PeopleComponent} ,
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
