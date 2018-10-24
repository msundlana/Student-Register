import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { routerConfig } from './router.config';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { navComponent } from './nav/nav.component';
import { MY_STATES } from './app.states';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
   UIRouterModule.forRoot({
      states: MY_STATES,
      useHash: false,
      config: routerConfig
    })],
  declarations: [ AppComponent, HelloComponent, LoginComponent, SignUpComponent, navComponent, HomeComponent, TimeTableComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }  
