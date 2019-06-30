import { Component, OnInit } from '@angular/core';
import { BundledataService } from '../../service/bundledata.service';
import {getType} from "@angular/core/src/errors";
import {Time} from "@angular/common";

import swal from 'sweetalert2'
import {isUndefined} from "util";


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  option: String;
  bundlenum: String;
  datefrom: Date;
  dateto: Date;
  bundles: any;
  msg: String;
  warehouse: String;


  constructor(
    private bundledata: BundledataService,
  ) {

  }

  ngOnInit() {
    document.getElementById("dateDiv").style.display = "none";
    document.getElementById("bundlenumDiv").style.display = "none";
  }

  searchBundle(){
    document.getElementById("table").style.display = "block";
    let data: Object;
    switch(this.option) {
      case "Bundle Number": {
        data = {number:this.bundlenum};
        this.bundledata.getBundleByBundleNumber(data).subscribe(res => {
          this.bundles = res.bundle;
          if (this.bundles.length == 0){
            this.msg = "No Available Bundle for bundle number "+ String(this.bundlenum);
          }
        });
        break;
      }
      case "Warehouse": {
        if(!isUndefined(this.warehouse)){
          data = {warehouse: this.warehouse, datefrom: this.datefrom, dateto: this.dateto };
          this.bundledata.getBundleByWarehouseWithTime(data).subscribe(res => {
            this.bundles = res.bundle;
            if (this.bundles.length == 0){
              this.msg = "No Available bundles for gievn time";
            }else{
              this.msg = "We found "+this.bundles.length+" bundles for given time";
            }
          });
        }
        else{
          swal({
            type: 'error',
            title: 'Error',
            text: 'Please Select a Warehouse!',
          });
        }
        break;
      }
      case "": {
        swal({
          type: 'error',
          title: 'Error',
          text: 'Please Select a Search Option!',
        });
        break;
      }

    }
    swal({
      title: 'Searching ...!',
      text: 'Please Wait ..!',
      timer: 1500,
      onOpen: () => {
        swal.showLoading()
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
      result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  showItem(){
    this.bundlenum = "";
    this.datefrom  = null;
    this.dateto = null;
    this.bundles = [];
    this.msg = "";
    document.getElementById("table").style.display = "none";
    if(this.option == "Warehouse"){
      document.getElementById("dateDiv").style.display = "block";
      document.getElementById("bundlenumDiv").style.display = "none";

    }if(this.option == "Bundle Number"){
      document.getElementById("dateDiv").style.display = "none";
      document.getElementById("bundlenumDiv").style.display = "block";
    }
  }

  showRate(bundle){
    document.getElementById(bundle.bundleNumber).style.display = "block";
  }



  closeRate(bundle){
    document.getElementById(bundle.bundleNumber).style.display = "none";

  }


}
