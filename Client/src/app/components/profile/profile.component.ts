import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {RecipedataService} from "../../service/recipedata.service";
import swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  id: String;
  lis: Object[];
  msg: String;
  name : String;


  constructor(
    private authservice:AuthService,
    private recipedata : RecipedataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      this.user = res.user;
      this.id = res.user._id;
      this.name = res.user.username;
      this.getRecipes();
    },err => {
      this.router.navigate(['/login']);
      return false;
    });


    document.getElementById("emaildiv").style.display = "none";
    document.getElementById("usernamediv").style.display = "none";
    document.getElementById("weightdiv").style.display = "none";
    document.getElementById("heightdiv").style.display = "none";
    document.getElementById("countrydiv").style.display = "none";
    document.getElementById("citydiv").style.display = "none";
    document.getElementById("occupationdiv").style.display = "none";
    document.getElementById("imgdiv").style.display = "none";
    document.getElementById("allergiesdiv").style.display = "none";
    document.getElementById("healthdiv").style.display = "none";

  }

  showEmail(){
    document.getElementById("emaildiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myemail")).select();
  }

  editEmail() {
    document.getElementById("emaildiv").style.display = "none";
    this.user.email = (<HTMLInputElement>document.getElementById("myemail")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showUsername(){
    document.getElementById("usernamediv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myusername")).select();
  }

  editUsername() {
    document.getElementById("usernamediv").style.display = "none";
    this.user.username = (<HTMLInputElement>document.getElementById("myusername")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showWeight(){
    document.getElementById("weightdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myweight")).select();
  }

  editWeight() {
    document.getElementById("weightdiv").style.display = "none";
    this.user.weight = (<HTMLInputElement>document.getElementById("myweight")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showHeight(){
    document.getElementById("heightdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myheight")).select();
  }

  editHeight() {
    document.getElementById("heightdiv").style.display = "none";
    this.user.height = (<HTMLInputElement>document.getElementById("myheight")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showCountry(){
    document.getElementById("countrydiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mycountry")).select();
  }

  editCountry() {
    document.getElementById("countrydiv").style.display = "none";
    this.user.country = (<HTMLInputElement>document.getElementById("mycountry")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showCity(){
    document.getElementById("citydiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mycity")).select();
  }

  editCity() {
    document.getElementById("citydiv").style.display = "none";
    this.user.city = (<HTMLInputElement>document.getElementById("mycity")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showOccupation(){
    document.getElementById("occupationdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myoccupation")).select();
  }

  editOccupation() {
    document.getElementById("occupationdiv").style.display = "none";
    this.user.occupation = (<HTMLInputElement>document.getElementById("myoccupation")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showImg(){
    document.getElementById("imgdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myimg")).select();
  }

  editImg() {
    document.getElementById("imgdiv").style.display = "none";
    this.user.img = (<HTMLInputElement>document.getElementById("myimg")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showAllergies(){
    document.getElementById("allergiesdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myallergies")).select();
  }

  editAllergies() {
    document.getElementById("allergiesdiv").style.display = "none";
    this.user.allergies = (<HTMLInputElement>document.getElementById("myallergies")).value.split(",");
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }

  showHealth(){
    document.getElementById("healthdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myhealth")).select();
  }

  editHealth() {
    document.getElementById("healthdiv").style.display = "none";
    this.user.healthconditions = (<HTMLInputElement>document.getElementById("myhealth")).value.split(",");
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        swal(
          'Data Updated!',
          '',
          'success'
        );
      }else{
        console.log(res);
      }
    });
  }


  updatefinal() {
    alert("Profile Updated successfully !");
    this.router.navigate(['/profile']);
  }

  goback() {
    this.router.navigate(['/home']);
  }

  getRecipes(){
    let author = {author:this.name};
    this.recipedata.searchByAuthor(author).subscribe(res => {
      this.lis = res.recipe;
      if (this.lis.length == 0){
        this.msg = "You didn't add any recipe yet";
        return true
      }else{
        this.msg = "We found "+this.lis.length+" recipes added by you ";
        return true
      }
    });
    return true
  }

  addRecipeNav() {
    this.router.navigate(['/add']);
  }




}
