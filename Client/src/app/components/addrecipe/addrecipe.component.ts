import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {ShipmentdataService} from "../../service/shipmentdata.service";
import {forEach} from "@angular/router/src/utils/collection";
import {BundledataService} from "../../service/bundledata.service";
import {SystemdataService} from "../../service/systemdata.service";
import {isUndefined} from "util";


@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  name: String;
  date:Date;
  count:Number;
  warehouse:String;
  bundlenum:String;
  crosssection:String;
  piecelength:Number;
  unitprice:Number;
  pieces:Number;
  bundles:bundleInt[] = [];
  bundle:any;
  shipment:any;
  timbers:timberInt[]=[];
  bundleprice:Number;
  shipmentPieces:Number;
  bundlePieces:Number;
  shipmentTotal: Number;
  buyer: String;
  bundleavailable:Boolean = false;
  data:any;

  constructor(
    private shipmentdata: ShipmentdataService,
    private bundledata: BundledataService,
    private systemdata: SystemdataService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getData();
    this.name = "";
  }

  getData() {
    this.systemdata.getData("A").subscribe(res => {
      this.data = res.data[0];
    });
  }

  addDetails(){
    if(isUndefined(this.crosssection) || isUndefined(this.piecelength) || isUndefined(this.pieces) || isUndefined(this.unitprice)){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">Please provide all details to add timber</text>',
      });
    }
    else{
      let  bundledetails :any  = {};
      bundledetails.crosssection = this.crosssection;
      bundledetails.piecelength = this.piecelength;
      bundledetails.pieces = this.pieces;
      bundledetails.unitprice = this.unitprice;
      bundledetails.price = Number(this.unitprice) * Number(this.piecelength) * Number(this.pieces);
      this.timbers.push(bundledetails);
      this.crosssection = "";
      this.piecelength = null;
      this.unitprice = null;
      this.pieces = null;
    }

  }


  addBundle(){
    if(this.name == "--" || isUndefined(this.bundlenum) || this.name == "" || isUndefined(this.name)){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">Please Select Bundle Number and Timber Name !!!</text>',
      });
    }else if(this.bundles.filter(bundle => bundle.bundlenum === this.bundlenum).length > 0){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">This Bundle number already added !!!</text>',
      });
    }else{
      this.bundledata.getBundleByBundleNumber({number:this.bundlenum}).subscribe(res=> {
        if (res.state) {
          if (res.bundle.length > 0) {
            swal({
              type: 'warning',
              html: '<text id="swal-input" type="text" ng-model="test">Wrong Bundle Number, Already added !!!</text>',
            });
            this.bundlenum = "";
          }
          else {
            this.bundleavailable = false;
            this.bundleprice = this.calculateBundlePrice();
            this.bundlePieces = this.calculateBundlePieces();
            let bundle: any = {};
            bundle.timbername = this.name;
            bundle.bundlenum = this.bundlenum;
            bundle.timbers = this.timbers;
            bundle.price = this.bundleprice;
            bundle.buyer = this.buyer;
            bundle.date = this.date;
            bundle.warehouse = this.warehouse;
            bundle.piecesBundle = this.bundlePieces;
            this.bundles.push(bundle);
            this.shipmentPieces = this.calculateTotalShipmentPieces();
            this.name = "";
            this.bundlenum = null;
            this.timbers = [];
            this.bundleprice = null;
          }
        }
      });
    }
  }

  calculateBundlePrice(){
    let total = 0;
    for(let timber in this.timbers){
      total = total + this.timbers[timber].price;
    }
    return total;
  }

  calculateBundlePieces(){
    let total = 0;
    for(let timber in this.timbers){
      total = total + Number(this.timbers[timber].pieces);
    }
    return total;
  }

  calculateTotalShipmentPrice(){
    let total = 0;
    for(let bundle in this.bundles){
      total = total + this.bundles[bundle].price;
    }
    return total;
  }

  calculateTotalShipmentPieces(){
    let total = 0;
    for(let bundle in this.bundles){
      total = total + Number(this.bundles[bundle].piecesBundle);
    }
    return total;
  }


  saveShipment(){
    if(isUndefined(this.warehouse) || isUndefined(this.date) || isUndefined(this.buyer)){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">Please provide Warehouse and Date !!!</text>',
      });
    }else if(this.bundles.length <= 0){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">No bundles to add !!!</text>',
      });
    } else{
      this.shipmentTotal = this.calculateTotalShipmentPrice();
      this.shipmentPieces = this.calculateTotalShipmentPieces();
      this.shipment = {
        date: this.date,
        warehouse:this.warehouse,
        bundles:this.bundles,
        total:this.shipmentTotal,
        buyer:this.buyer,
      };
      this.shipmentdata.saveShipment(this.shipment).subscribe(res=>{
        if (res.state){
          swal(
            'Data Saved!',
            '',
            'success'
          );
          this.router.navigate(['/add'])
        }else{
          console.log(res);
        }
      });
      this.saveBundles();
      this.date = null;
      this.warehouse = null;
      this.shipmentTotal = null;
      this.bundles = [];
      this.buyer = null;
      this.shipmentPieces = 0;
    }
  }



  saveBundles(){
    for (let bundle in this.bundles){
      console.log(bundle);
      this.bundledata.saveBundle(this.bundles[bundle]).subscribe(res=>{
        if (res.state){
          console.log("Bundle saved !!!")
        }else{
          console.log(res);
        }
      });
    }
  }

  removeTimber = (tim: any): void => {
    this.timbers = this.timbers.filter(timber => timber.piecelength!== tim.piecelength);
  };

  removeBundle = (bun: any): void => {
    this.bundles = this.bundles.filter(bundle => bundle.bundlenum !== bun.bundlenum);
  };

  cancelShipment(){
    this.bundles = [];
    this.buyer = null;
    this.warehouse = null;
    this.date = null;
    this.router.navigate(['/add'])
  }

  checkBundleNumber(bundlenum){
    let boo : Boolean = false;
    this.bundledata.getBundleByBundleNumber({number:bundlenum}).subscribe(res=>{
      if(res.state){
        if(res.bundle.length > 0){
          boo = true;
          this.bundleavailable = true;
        }
      }
    });
    return boo;
  }

}



interface timberInt{
  crosssection:string,
  piecelength:number,
  unitPrice:number,
  price:number,
  pieces:number
}

interface bundleInt{
  timbername:string,
  bundlenum:string,
  timbers:object,
  price:number,
  warehouse:string,
  date:Date,
  buyer:string,
  piecesBundle:number

}
