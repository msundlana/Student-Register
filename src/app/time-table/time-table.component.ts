import {Component,Input,OnInit} from '@angular/core';
import {StateService} from '@uirouter/angular'
@Component({
  selector: 'time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit{

  constructor(private state:StateService){
  } 
  ngOnInit() {
   }
}