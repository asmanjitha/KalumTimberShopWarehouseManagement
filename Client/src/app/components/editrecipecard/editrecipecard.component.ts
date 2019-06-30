import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-editrecipecard',
  templateUrl: './editrecipecard.component.html',
  styleUrls: ['./editrecipecard.component.css']
})
export class EditrecipecardComponent implements OnInit {

  @Input()Recipe:Object;

  constructor() { }

  ngOnInit() {
  }

}
