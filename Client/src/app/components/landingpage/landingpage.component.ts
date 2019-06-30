import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BundledataService} from "../../service/bundledata.service";

import swal from 'sweetalert2'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  bundlesA:any;
  bundlesB:any;
  warehouseA:Object = {warehouse:"Sujeewa"};
  warehouseB:Object = {warehouse:"Asala"};
  constructor(
    private bundledata: BundledataService,
    private router: Router

  ) {
    this.bundledata.getBundleByWarehouse(this.warehouseA).subscribe(res => {
      this.bundlesA = res.bundle;
    }, err => {
      console.log(err);
      return false;
    });
    this.bundledata.getBundleByWarehouse(this.warehouseB).subscribe(res => {
      this.bundlesB = res.bundle;
    }, err => {
      console.log(err);
      return false;
    });
  }

  ngOnInit() {

  }

  counttotalprice(bundles){
    let total = 0;
    for (let bundle in bundles){
      total += bundles[bundle].totalPrice;
    }
    return total;
  }




}
