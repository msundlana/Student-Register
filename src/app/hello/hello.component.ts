import { Component, Input } from '@angular/core';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.css' ]
})
export class HelloComponent  {

  constructor(private state:StateService){
  }

  signUp(){
    this.state.go('signup');
    console.log('sign up');
  }

  login(){
    this.state.go('login');
    console.log('login');
  }
   
}
