import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StateService} from '@uirouter/angular';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`h1 { font-family: Lato ; }`]
})
export class LoginComponent implements OnInit  {
  
  constructor(private state:StateService){
  }
  ngOnInit() {
   }

   login(){
    console.log('logged In');
    this.state.go('edu');
   }

   cancel(){
     this.state.go('app');
   }
}
