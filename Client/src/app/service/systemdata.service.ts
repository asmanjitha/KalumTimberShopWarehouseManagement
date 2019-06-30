import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SystemdataService {

  constructor(
    private http: HttpClient
  ) { }

  saveData(systemdata){
    return this.http.post('http://localhost:3000/data/savedata',systemdata).map((res:any) => res);
  }


  saveName(systemdata){
    return this.http.post('http://localhost:3000/data/savename',systemdata).map((res:any) => res);
  }

  saveCross(systemdata){
    return this.http.post('http://localhost:3000/data/savecross',systemdata).map((res:any) => res);
  }

  getData(systemdata){
    return this.http.post('http://localhost:3000/data/getdata',systemdata).map((res:any) => res);
  }
}


