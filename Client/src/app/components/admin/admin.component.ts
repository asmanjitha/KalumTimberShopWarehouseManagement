import { Component, OnInit } from '@angular/core';
import { SystemdataService } from '../../service/systemdata.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import {isUndefined} from "util";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data:any;
  timbername:String;
  crosssection:String;


  constructor(
    private systemdata: SystemdataService,
    private router: Router) {
  }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.systemdata.getData("A").subscribe(res => {
      this.data = res.data[0];
    });
  }

  saveName(){
    if(isUndefined(this.timbername) || this.timbername === ""){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">Timber Name Empty !!!</text>',
      });
    }else{
      this.data.timbernames.push(this.timbername);
      this.systemdata.saveName(this.data).subscribe(res => {
        if(res.state){
          swal({
            type: 'success',
            html: '<text id="swal-input" type="text" ng-model="test">Data Saved</text>',
          });
          this.getData();
          this.timbername = "";
        }

      });
    }

  }

  saveCross(){
    if(isUndefined(this.crosssection) || this.crosssection === ""){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">CrossSection is Empty !!!</text>',
      });
    }else{
      this.data.crosssections.push(this.crosssection  );
      this.systemdata.saveCross(this.data).subscribe(res => {
        if(res.state){
          swal({
            type: 'success',
            html: '<text id="swal-input" type="text" ng-model="test">Data Saved</text>',
          });
          this.getData();
          this.crosssection = "";
        }

      });
    }

  }
}
