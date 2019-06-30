import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String ;
  username: String ;
  email: String ;
  password: String ;
  msg: String;
  err: Boolean;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerData() {
      const user = {
      name: (<HTMLInputElement>document.getElementById("Name")).value,
      username: (<HTMLInputElement>document.getElementById("username")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value
    };
    this.authService.registerUser(user).subscribe(res => {
      if(res.state){
        this.authService.saveData(res.token, res.userData);
        swal(
          'You are Signed in',
          '',
          'success'
        );
        //location.reload();
        this.router.navigate(['/home']);
      }else{
        swal(
          'Sign In Failed',
          '',
          'warning'
        );
        this.router.navigate(['/login']);
      }
    });
  }

  validateData(){
    //alert((<HTMLInputElement>document.getElementById("Name")).value);
    this.msg = "";
    this.err = false;
    if ((<HTMLInputElement>document.getElementById("username")).value == ""){
      swal(
        'User Name is empty',
        '',
        'warning'
      );
      this.err = true;
    }else if ((<HTMLInputElement>document.getElementById("Name")).value == ""){
      swal(
        'Name is empty',
        '',
        'warning'
      );
      this.err = true;
    }else if ((<HTMLInputElement>document.getElementById("email")).value == ""){
      swal(
        'Email is empty',
        '',
        'warning'
      );
      this.err = true;
    }else if ((<HTMLInputElement>document.getElementById("password")).value == ""){
      swal(
        'Password is empty',
        '',
        'warning'
      );
      this.err = true;
    }else
      //alert((<HTMLInputElement>document.getElementById("email")).value);
      this.authService.searchByEmail({email:(<HTMLInputElement>document.getElementById("email")).value}).subscribe(res => {
        if(res.user.length > 0){
          swal(
            'Email Already Used',
            '',
            'warning'
          );
          this.err = true;
        }else{
          swal({
            title: 'Registering ...!',
            text: 'Please Wait',
            timer: 1500,
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
          });
          this.registerData();
        }
      });

  }
}
