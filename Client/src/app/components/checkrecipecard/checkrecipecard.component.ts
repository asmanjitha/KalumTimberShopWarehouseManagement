import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkrecipecard',
  templateUrl: './checkrecipecard.component.html',
  styleUrls: ['./checkrecipecard.component.css']
})
export class CheckrecipecardComponent implements OnInit {

  @Input()Recipe:Object;

  constructor() { }

  ngOnInit() {
  }

}
