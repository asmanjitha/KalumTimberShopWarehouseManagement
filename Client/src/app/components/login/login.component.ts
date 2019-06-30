import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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


    this.authService.loginUser(user).subscribe((res: any) => {
      if(res.state){
        this.authService.saveData(res.token, res.userData);
        swal(
          'You are logged in',
          '',
          'success'
        );
        //location.reload();
        this.router.navigate(['/home']);
      }else{
        alert("logging in failed");
        this.router.navigate(['/login']);
      }
    });
  }
}
