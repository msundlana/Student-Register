import { AppComponent } from './app.component';
import { signUpState } from './signup/signup.states';
import { loginState } from './login/login.states';
import { navState } from './nav/nav.states';
import { homeState } from './home/home.states';
import { timeTableState } from './time-table/time-table.states';
import { Routes } from '@angular/router';

export const appState = {
  name: 'app',
  url: '/',
  component: AppComponent
}

export const MY_STATES = [
  appState,
  signUpState,
  loginState,
  navState,
  homeState,
  timeTableState
];


