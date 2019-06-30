import { Component, OnInit } from '@angular/core'
import { ActivatedRoute} from '@angular/router';
import { BundledataService } from '../../service/bundledata.service';
import { ShipmentdataService } from '../../service/shipmentdata.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import {isNumber, isUndefined} from "util";

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {

  recipe:any;
  id:String;
  user:any;
  bundles:bundleInt[] = [];
  bundlenum:String;
  date:Date;
  arrivalDate:Date;
  arrivalPieces:Number;

  constructor(
    private shipmentdata: ShipmentdataService,
    private bundledata: BundledataService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  addBundle(bundlenum){
    let bundle:any = {};
    this.bundledata.getBundleByBundleNumber({number:bundlenum}).subscribe(res=>{
      if (res.state){
        if(res.bundle.length == 0 || res.bundle[0].deleted){
          swal({
            type: 'warning',
            html: '<text id="swal-input" type="text" ng-model="test">Wrong Bundle Number !!!</text>',
          });
          this.bundlenum = "";
        }
        else{
          bundle = res.bundle[0];
          if ((this.bundles.filter(bund => bund.bundleNumber === bundle.bundleNumber).length > 0)){
            swal({
              type: 'warning',
              html: '<text id="swal-input" type="text" ng-model="test">Bundle already added !!!</text>',
            });
          }else{
            this.bundles.push(bundle);
            this.arrivalPieces = this.calculateTotalArrivalPieces();
            this.bundlenum = "";
          }

        }

      }else{
        console.log(res);
      }
    });
  }

  removeBundle = (bun: any): void => {
    this.bundles = this.bundles.filter(bundle => bundle.bundleNumber !== bun.bundleNumber);
  };

  calculateTotalArrivalPieces(){
    let total = 0;
    for(let bundle in this.bundles){
      if (!(isUndefined(this.bundles[bundle].totalPieces)) || isNumber(this.bundles[bundle].totalPieces) )
      total = total + Number(this.bundles[bundle].totalPieces);
    }
    return total;
  }

  cancel(){
    this.arrivalPieces = 0;
    this.bundles = [];
    this.date = null;
  }

  saveArrival(){
    if(isUndefined(this.date)){
      swal({
        type: 'warning',
        html: '<text id="swal-input" type="text" ng-model="test">Set Arrival Date !!! </text>',
      });
    }else{
      let count = 0;
      for(let bundle in this.bundles){
        this.bundles[bundle].arrivalDate = this.date;
        this.bundledata.deleteBundle(this.bundles[bundle]).subscribe(res=>{
          if (res.state){
            count ++;
            if(count == this.bundles.length){
              swal({
                type: 'success',
                html: '<text id="swal-input" type="text" ng-model="test">Arrival Saved !!!</text>',
              });
              this.bundles = [];
              this.arrivalPieces = 0;
            }
          }else{
            console.log(res);
          }
        });
      }
    }
  }



}

interface timberInt{
  crossSection:string,
  pieceLength:number,
  unitPrice:number,
  price:number
}

interface bundleInt{
  timbername:string,
  bundlenum:string,
  timbers:object,
  price:number,
  warehouse:string,
  date:Date,
  buyer:string,
  bundleNumber:string,
  arrivalDate: Date,
  totalPieces: number

}

