import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  LoginData() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.loginAdmin(user).subscribe((res: any) => {
      if(res.state){
        this.authService.saveData(res.token, res.adminData);
        swal(
          '"You are logged in"',
          '',
          'success'
        );
        this.router.navigate(['/admin']);
      }else{
        swal(
          'Login Failed !',
          '',
          'warning'
        );
        this.router.navigate(['/adminlogin']);
      }
    });
  }




}
