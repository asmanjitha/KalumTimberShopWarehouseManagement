import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BundledataService {

  shipment:any;

  constructor(
    private http: HttpClient
  ) { }


  saveBundle(bundle){
    return this.http.post('http://localhost:3000/timberbundle/savebundle',bundle).map((res:any) => res);
  }

  getBundleByWarehouse(warehouse){
    return this.http.post('http://localhost:3000/timberbundle/warehouse',warehouse).map((res:any) => res);
  }

  getBundleByBundleNumber(bundlenumber){
    return this.http.post('http://localhost:3000/timberbundle/number',bundlenumber).map((res:any) => res);
  }

  getBundleByWarehouseWithTime(data){
    return this.http.post('http://localhost:3000/timberbundle/warehousetime',data).map((res:any) => res);
  }
}
