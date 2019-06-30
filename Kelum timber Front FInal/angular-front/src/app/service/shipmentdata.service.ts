import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ShipmentdataService {

  shipment:any;

  constructor(
    private http: HttpClient
  ) { }


  saveShipment(shipment){
    return this.http.post('http://localhost:3000/shipment/saveshipment',shipment).map((res:any) => res);
  }


}
