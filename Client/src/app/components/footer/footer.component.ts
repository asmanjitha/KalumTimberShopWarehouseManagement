import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user:any;
  constructor(
    private router: Router,
    private authservice:AuthService,
  ) { }

  ngOnInit() {
    document.getElementById("adminhome").style.display = "block";
    this.authservice.getProfile().subscribe(res =>{
      document.getElementById("adminlog").style.display = "none";

    },err => {
      console.log(err);
      return false;
    });

    this.authservice.getAdminProfile().subscribe(res =>{
      document.getElementById("adminhome").style.display = "none";

    },err => {
      console.log(err);
      return false;
    });

  }

}
