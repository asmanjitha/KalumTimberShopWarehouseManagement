import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BundledataService } from '../../service/bundledata.service';
import { ShipmentdataService } from '../../service/shipmentdata.service';
import { NeutronRatingModule } from 'neutron-star-rating';

import swal from 'sweetalert2'

@Component({
  selector: 'app-redipedetails',
  templateUrl: './redipedetails.component.html',
  styleUrls: ['./redipedetails.component.css']
})
export class RedipedetailsComponent implements OnInit {

  id: String;
  warehouse: any;
  bundles:any;
  rating:any;
  temprate:any;

  //@Input()Bundles:any;

  constructor(
    private bundledata: BundledataService,
    private shipmentdata:ShipmentdataService,
    private acrouter: ActivatedRoute
  ) {
    this.id = acrouter.snapshot.params['_id'];
    if(this.id == "Sujeewa"){
      this.warehouse = {warehouse:"Sujeewa"};
    }else if(this.id == "Asala"){
      this.warehouse = {warehouse:"Asala"};
    }
    this.bundledata.getBundleByWarehouse(this.warehouse).subscribe(res => {
      this.bundles = res.bundle;
    }, err => {
      console.log(err);
      return false;
    });


  }

  ngOnInit() {
    swal({
      title: 'Loading Data!',
      text: 'Please Wait ..!',
      timer: 2000,
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


  showRate(bundle){
    document.getElementById(bundle.bundleNumber).style.display = "block";
  }



  closeRate(bundle){
    document.getElementById(bundle.bundleNumber).style.display = "none";

  }

}
