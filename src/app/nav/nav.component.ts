import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StateService} from '@uirouter/angular';
import * as $ from 'jquery';



@Component({
  selector: 'edu',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class navComponent implements OnInit  {
  
  constructor(private state:StateService){
  }
  ngOnInit() {
   }

  nav(state){
    this.state.go(state);
  }

   myFunction(value) {
    document.getElementById(value).classList.toggle("show");
    $(document).ready(function(){
      $('a').click(function(){
          
      });
    });
}


}
