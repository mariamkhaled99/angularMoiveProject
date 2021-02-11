import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from'@angular/common/http';
import{ReactiveFormsModule}from '@angular/forms'
import{FormsModule}from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MoivesComponent } from './moives/moives.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { NetworksComponent } from './networks/networks.component';
import { LogOutComponent } from './log-out/log-out.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { SearchMoivePipe } from './search-moive.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    MoivesComponent,
    TvShowComponent,
    NetworksComponent,
    LogOutComponent,
    PeopleComponent,
    NotFoundComponent,
    LogInComponent,
    RegisterComponent,
    SearchMoivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
