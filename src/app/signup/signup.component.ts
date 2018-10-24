import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StateService} from '@uirouter/angular';
import {Person} from './signup.model';


@Component({
  selector: 'signup',
   templateUrl: './signup.component.html',
  styles: [`h1 { font-family: Lato ; }`]
})
export class SignUpComponent implements OnInit  {
  people: Person[] = [];
  schools: string[] = [
    'One', 'Two','Three'
  ];
  person: Person = {
    school: null,
    fullName: null,
    id: 0,
    passport: null,
    dateOfBirth: null,
    phoneNumber: 0,
    email: null,
    username: null,
    password: null,
  };
  password: string = null;
  constructor(private state:StateService){

  }
  ngOnInit() {
   }

   submit(searchForm: NgForm){
     if (searchForm && searchForm.value) {
       this.person = searchForm.value;
       this.people.push(this.person);
        console.log('submitted' + ' ' + this.people.toString());
     }
   }
   reset(){
     console.log('reset');
   }
   cancel(){
     this.state.go('app');
     console.log('cancelled');
   }
}
