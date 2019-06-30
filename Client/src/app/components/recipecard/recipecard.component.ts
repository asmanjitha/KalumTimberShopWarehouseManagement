import {Component, Input, OnInit} from '@angular/core';
import {LiteralArray} from "@angular/compiler";
import { NeutronRatingModule } from 'neutron-star-rating';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.css']
})
export class RecipecardComponent implements OnInit {

  @Input()Recipe:Object;

  constructor(

  ) { }

  ngOnInit() {
  }



}
