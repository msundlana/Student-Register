import { Component, Input,OnInit} from '@angular/core';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor (private state: StateService){

  }
  ngOnInit() {
   }

}