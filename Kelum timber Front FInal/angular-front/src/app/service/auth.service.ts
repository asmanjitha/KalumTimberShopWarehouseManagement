import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user: any;
  authtoken: any;
  st:any;


  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('user/register', user, {headers: headers}).map((res: any) => res);
  }

  getProfile(){
    let httpOptions = {
      headers: new HttpHeaders({
      })
    };
    this.fetchToken();
    return this.http.post('user/profile', {user:"asm"},{headers:{'Authorization':this.authtoken}})
      .map((res:any) => res);
  }

  fetchToken(){
    this.authtoken = localStorage.getItem("tokenId");

  }

  loginUser(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('user/login', user, {headers: headers}).map((res: any) => res);
  }

  loginAdmin(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('admin/login', user, {headers: headers}).map((res: any) => res);
  }

  saveData(token, userdata){
    this.authtoken = token;
    this.user = userdata;
    localStorage.setItem("tokenId",token);
    localStorage.setItem('user', JSON.stringify(userdata));
  }

  editUser(user){
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('user/update', user, {headers: headers}).map((res: any) => res);
  }


  getAdminProfile(){
    this.fetchToken();
    return this.http.post('admin/getprofile', {user:"asm"},{headers:{'Authorization':this.authtoken}})
      .map((res:any) => res);
  }

  searchByEmail(email) {
    return this.http.post('user/email',email).map((res: any) => res);
  }

}
